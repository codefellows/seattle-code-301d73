# Code 301 Final Assessment

## API Server Bug List

### src/server.js

- Line 13: `/allitems` ... react app is trying to get `/items`
  - React will see a 404 until one of those spots is updated

## React App Bug List

### src/components/add-item.js

- Missing: `e.preventDefault()` in the handler
  - it won't actually add until that's back
