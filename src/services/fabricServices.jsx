export const getAllFabrics = () => {
    return fetch(`http://localhost:8088/fabrics`).then(res => res.json())
}