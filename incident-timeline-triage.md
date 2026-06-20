Incident Timeline Triage

Objective

Analyze 24 hours of Sysmon, Linux authentication logs, and HTTP access logs to identify suspicious activity and create a defensible incident timeline.

Tools Used

- Linux grep
- jq
- Sysmon
- Auth.log
- HTTP Access Logs

Key Findings

SSH Brute Force

Multiple failed SSH login attempts were observed from a single external IP.

Successful Login

A successful login occurred immediately after repeated failures.

Web Reconnaissance

Requests targeting:

- /wp-admin
- /phpmyadmin

indicated attacker reconnaissance.

Outcome

Created a chronological timeline with evidence citations and detection recommendations.
