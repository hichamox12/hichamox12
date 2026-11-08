"""Refresh data.js with the latest GitHub contribution snapshot."""
import datetime, json, urllib.request
USER = "hichamox12"
j = json.load(urllib.request.urlopen(f"https://github-contributions-api.jogruber.de/v4/{USER}?y=last", timeout=30))
snap = {"generated": str(datetime.date.today()), "total": j["total"]["lastYear"], "days": j["contributions"]}
with open("data.js", "w", encoding="utf-8") as f:
    f.write("// Offline fallback for the contributions/streak commands (used when the live API is unreachable).\n"
            "// Refresh: python update_snapshot.py\nwindow.SNAPSHOT = " + json.dumps(snap, separators=(",", ":")) + ";\n")
print(f"{snap['total']} contributions, {len(snap['days'])} days")
