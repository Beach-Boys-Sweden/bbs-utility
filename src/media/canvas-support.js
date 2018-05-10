let canvas = document.createElement('canvas');

const setDimensions = (width, height) => {
    canvas.width = width, canvas.height = height;
    return canvas;
};

export const canvasContext = (width, height, contextType = '2d', contextAttributes = {}) =>
    setDimensions(width, height).getContext(contextType, contextAttributes);

export const drawImage = (target, dstX = 0, dstY = 0, context = canvasContext()) => {
    context.drawImage(target, dstX, dstY);
    return captureImage;
};

export const captureImage = (callback, context = canvas, mimeType = 'image/png', qualityArgument = 1) =>
    context.toBlob(callback, mimeType, qualityArgument);



