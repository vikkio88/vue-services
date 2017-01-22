# vue-service
vue-resource wrapper class

## Usage
you will need to create a service class like this:

```javascript
// someService.js
import Service from 'vue-service'

const apiUrl = 'http://some.stuff/api/';

export default someService extends Service {
    
    construct(){
        super(apiUrl)
    }

    getAll(){
        return this.get('someEndPoint');
    }

    getOne(id) {
        return this.get('someEndPoint/'+ id);
    }
}
```

then you can import it an use it in what component you like

## TODO
- Create a Service Pool Vue Plugin, in order to call Services by name within the component
