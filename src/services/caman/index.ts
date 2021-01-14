import {Caman} from 'caman';

Caman('./public/assets/sliced_rotated.jpg', function () {
    this.greyscale();
    this.contrast(100);
    this.brightness(30);
    this.render(function () {
        this.save('./public/assets/sliced_corrected.jpg');
    });
});
