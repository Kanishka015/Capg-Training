# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: transferfunds.spec.ts >> Funds Transfer Flow >> Login, Add Beneficiary, Transfer Funds, Verify and Logout
- Location: tests\transferfunds.spec.ts:10:9

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - banner [ref=e5]:
    - generic [ref=e6]: APEX BANK
    - generic [ref=e10]:
      - generic [ref=e11]: Secure NetBanking
      - button "Reset Database" [ref=e15] [cursor=pointer]
      - img "Profile" [ref=e21]
      - button "Sign Out" [ref=e22] [cursor=pointer]
  - navigation [ref=e23]:
    - button "Accounts Summary" [ref=e24] [cursor=pointer]
    - button "Funds Transfer" [active] [ref=e25] [cursor=pointer]
    - button "Cards Controls" [ref=e26] [cursor=pointer]
    - button "Loans Center" [ref=e27] [cursor=pointer]
    - button "Customer Support" [ref=e28] [cursor=pointer]
    - button "Preferences" [ref=e29] [cursor=pointer]
  - generic [ref=e30]:
    - generic [ref=e31]:
      - img "Profile" [ref=e32]
      - generic [ref=e33]:
        - heading "Welcome back, Apex User" [level=1] [ref=e34]
        - paragraph [ref=e35]: "Apex Trust Retail Banking Portal. Last active: Today"
    - generic [ref=e36]:
      - generic [ref=e37]:
        - heading "Initiate Transfer" [level=2] [ref=e38]
        - generic [ref=e39]:
          - generic [ref=e40]:
            - generic [ref=e41]: Transfer Type
            - combobox [ref=e42]:
              - option "Between My Accounts" [selected]
              - option "External Wire Transfer"
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [ref=e45]: From Account
              - combobox [ref=e46]:
                - option "Checking ($4250)" [selected]
                - option "Savings ($18400)"
            - generic [ref=e47]:
              - generic [ref=e48]: To Account
              - combobox [ref=e49]:
                - option "Checking ($4250)"
                - option "Savings ($18400)" [selected]
          - generic [ref=e50]:
            - generic [ref=e51]: Transfer Amount ($)
            - spinbutton "0.00" [ref=e52]
          - button "Execute Transfer" [ref=e53] [cursor=pointer]
      - generic [ref=e54]:
        - generic [ref=e55]:
          - heading "Registered Beneficiaries" [level=2] [ref=e56]
          - button "Add New" [ref=e57] [cursor=pointer]
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]:
              - heading "Alice Smith" [level=4] [ref=e62]
              - paragraph [ref=e63]: "Chase Bank | Acc: 1234******"
            - generic [ref=e64]:
              - button [ref=e65] [cursor=pointer]
              - button [ref=e68] [cursor=pointer]
          - generic [ref=e72]:
            - generic [ref=e73]:
              - heading "Bob Jones" [level=4] [ref=e74]
              - paragraph [ref=e75]: "Bank of America | Acc: 5544******"
            - generic [ref=e76]:
              - button [ref=e77] [cursor=pointer]
              - button [ref=e80] [cursor=pointer]
```