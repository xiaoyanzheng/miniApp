export default function keyMirror(keyArr=[]) {
    const keyMap = {};
    keyArr.forEach(key => {
        keyMap[key] = key;
    });
    return keyMap;
}