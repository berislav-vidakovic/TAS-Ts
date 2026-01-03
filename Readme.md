## Test Automation Solution (TAS)

<div style="margin-bottom: 12px;">
<img src = "docs/images/pw.png" /> 
<img src = "docs/images/ts.png" /> 
</div>

This TAS covers 3 System Under Test (SUT):
- WebShop 
- ChatApp 
- Games 

Run TAS for each SUT:
  ```bash
  npm run testWebshop
  ```
  ```bash
  npm run testChat
  ```
  ```bash
  npm run testGames
  ```

Add environment variable to gitlab.yml
  ```yaml
  HEADLESS: "true"
  ```

Build scheduled Pipeline on GitLab
  - Build - Pipeline schedules - New schedule

  