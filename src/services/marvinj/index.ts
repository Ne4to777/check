import {MarvinImage} from 'marvinj';
console.log(MarvinImage);

const canvas = document.getElementById('canvas');
const image = new MarvinImage();
console.log(canvas);

image.load('./assets/sliced_rotated.jpg', function () {
    image.draw(canvas);
});
