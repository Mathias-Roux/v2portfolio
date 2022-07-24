import { Item } from './modules/item.js';
import { Preview } from './modules/preview.js';

const items = [];
[...document.querySelectorAll('.item')].forEach(item => items.push(new Item(item)));

const previews = [];
[...document.querySelectorAll('.item')].forEach(item => previews.push(new Preview(item)));
