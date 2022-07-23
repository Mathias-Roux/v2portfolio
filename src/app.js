import { Item } from './modules/item.js';

const items = [];
[...document.querySelectorAll('.item')].forEach(item => items.push(new Item(item)));
