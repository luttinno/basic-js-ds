const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function findLastElement(obj) {
  let checkObj = obj;
  while (checkObj.next !== null) {
    checkObj = checkObj.next;
  }
  return checkObj;
}

function removeKFromList(l, k) {
  let list = structuredClone(l);
  let newList = {};

  let checkObj = list;

  function createNewList() {
    console.log(checkObj.value);
    console.log(checkObj.value !== k);
    if (checkObj.value !== k) {
      const newElement = new ListNode(checkObj.value);

      if (!newList.value) {
        newList = newElement;
      } else {
        let lastElem = findLastElement(newList);
        lastElem.next = newElement;
      }
    }
    checkObj = checkObj.next;
  }

  while (checkObj.next !== null) {
    createNewList();
  }
  createNewList();

  return newList;
}

module.exports = {
  removeKFromList,
};
