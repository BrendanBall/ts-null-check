
interface ApiResponse {
    foo:  {
        bar: string
    } | null
}

function api(id: string): ApiResponse {
    return id === '1' ? { foo: null } : { foo: { bar: 'baz' } }
}

interface LogicResponse {
    foo:  {
        bar: string
    }
}

function logic(id: string): LogicResponse {
    const resp = api(id)
    console.log(resp.foo.bar)
    if (!resp.foo) {
        throw new Error('foo is null')
    }
    console.log(resp.foo.bar)
    return resp
}