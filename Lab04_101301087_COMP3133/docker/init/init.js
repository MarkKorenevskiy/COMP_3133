// log the start of the script execution
print('START');

// switch to the 'product-service' database (or create if it doesn't exist)
db = db.getSiblingDB('lab04');

db.createUser(
    {
        user: 'admin',
        pwd: 'password',
        roles: [{role: 'readWrite', db: 'lab04'}],
    }
);

print('END');