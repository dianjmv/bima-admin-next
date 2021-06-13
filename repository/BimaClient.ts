class BimaClient{
    private baseUrl = 'http://127.0.0.1:8000'
    private apiKeys = {
        grant_type: 'password',
        client_id: '9342ca81-f90c-4579-b0f6-8c77f3fd8c9b',
        client_secret: 'gBHs5SVFRMhExt6oywjeEFOXi4ZGP6AkN0eYstB4',
    }

    public getUrl(){
        return this.baseUrl
    }

    public getKeys(){
        return this.apiKeys
    }
}
export default BimaClient
