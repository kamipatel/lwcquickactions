# Lwc Quick Action components for performance testing

## Auth with the STMPA org

1. Open `http://your-org.my.stmpa.stm.salesforce.com/qa/initSdxOauth.jsp`

2. Auth `sfdx force:auth:web:login -a stmpa-hub -r "http://your-org.my.stmpa.stm.salesforce.com"`

3. Push `sfdx force:source:push`

## Quick Actions

- Screen actions: `action0`, `action1`, `action2`

- Headless actions: `headless0`, `headless`


sfdx force:auth:web:login --setdefaultdevhubusername 
kamlesh.patel-2glm@force.com

sfdx force:org:create -f config/project-scratch-def.json -d 30 -a so

sfdx force:source:push -u so

sfdx force:org:open  -u so

