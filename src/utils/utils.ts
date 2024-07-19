export async function Sandbox<T>(func: () => T, error: () => T) {
    try {
        return await func();
    } catch (ex) {
        console.error(ex)
        return await error();
    }
}