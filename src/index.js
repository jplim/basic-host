import Server from './lib/nsc-server';

const nsc = new Server('#container');

setTimeout(() => {
    nsc.fireLoadGeometries([{
        "geometry": {
            "type": "Point",
            "coordinates": [
                -136.3921568033985,
                -32.67920194436819
            ]
        },
        "type": "Feature",
        "properties": {

        }
    }, {
        "type": "Feature",
        "properties": {
            "business_object_id": "31231312321",
            "business_object_type": "Equipment",
            "business_object_description": "Equipment 1234",
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                152.578125,
                -25.641526373065755
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "business_object_id": "999999992321",
            "business_object_type": "Equipment",
            "business_object_description": "Equipment 99999"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                151.083984375,
                -30.60009387355006
            ]
        }
    }]);
}, 5500);

nsc.onSemanticObjectNavigation((semanticObject, action, parameters) => {
    console.log({
        semanticObject,
        action,
        parameters
    });
})