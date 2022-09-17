class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; // initializes an empty array to store list elements
    }
    //Add element to List
    append(element) {
        this.dataStore[this.listSize++] = element;
    }
    //Search element and returns it's position
    find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }
    //Remove element
    remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }
    length() {
        return this.listSize;
    }
    toString() {
        return this.dataStore;
    }
    insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }
    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    //return true or false depend on existense of the element in the list
    contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }
    //First position
    front() {
        this.pos = 0;
    }
    //Last one
    end() {
        this.pos = this.listSize - 1;
    }
    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }
    currPos() {
        return this.pos;
    }
    moveTo(position) {
        this.pos = position;
    }
    getElement() {
        return this.dataStore[this.pos];
    }

}

module.exports = { List }