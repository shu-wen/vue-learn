
export type Target = object

export const reactiveMap = new WeakMap<object,any>()

export function get(target:object, key:string, receiver:object){
    const res = Reflect.get(target, key, receiver)
    return res
}

export function set(target:object, key:string, value:unknown, receiver:object){
    let oldVal = (target as any)[key]
    oldVal.value = value
    return true
}

export const baseHandler = {
    get,
    set
}

export function reactive<T extends object>(target: T): T

export function reactive(target: Target ){
    return createReactiveObject(target,baseHandler,reactiveMap)
}

export function createReactiveObject(
    target: Target,
    handler: object,
    proxyMap: WeakMap<object,any>
){
    if( isObject(target) ){
        const proxy = new Proxy(target,handler)
        proxyMap.set(target,proxy)
        return proxy
    }
    return target
}

function isObject(val:unknown):boolean{
    return val !== null && typeof val === 'object'
}