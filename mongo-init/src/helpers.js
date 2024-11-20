export const mapIds = (res, array) => {
    return array.map((arrayItem, index) => {
        return {
            ...arrayItem,
            _id: res.insertedIds[index],
        };
    });
};
