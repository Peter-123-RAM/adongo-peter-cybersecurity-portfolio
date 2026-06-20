Threat Hunting Investigation

Hypothesis

Attackers may intercept mobile-money OTP codes to perform account takeover and fraudulent wallet transfers.

Data Sources

- Authentication Logs
- OTP Validation Logs
- Wallet Transaction Logs

Findings

Observed login sessions where:

- Login IP differed from OTP validation IP
- Wallet transfers occurred shortly afterward
- Multiple accounts showed similar patterns

MITRE ATT&CK

- T1078 Valid Accounts
- T1111 Multi-Factor Authentication Interception

Outcome

Produced threat intelligence findings and defensive recommendations.
