export const getAssetPath = (fileName, path = "") => {
    let assetPath;
    try {
        let asset = require(`../asset/${path ? `${path}/` : ""}${fileName}`);
        if (typeof asset === 'string') assetPath = asset;
        else if (typeof asset === 'object') assetPath = asset.default;
        else assetPath = ""
    }
    catch {
        assetPath = "";
    }
    return assetPath;
};
