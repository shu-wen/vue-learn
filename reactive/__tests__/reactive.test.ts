
import { reactive } from '../reactive'

describe('test reactive',()=>{
    test('Object', () => {
        const original = { foo: 1 }
        const observed = reactive(original)
        expect(observed).not.toBe(original)
        // get
        expect(observed.foo).toBe(1)
        // has
        expect('foo' in observed).toBe(true)
        // ownKeys
        expect(Object.keys(observed)).toEqual(['foo'])
      })
})