function inOrder(node) {
    if(node.left) {
        inOrder(node.left)
    }

    if(node.right) {
        inOrder(node.right)
    }

    console.log(node.data)
}

function findOrAdd(rootNode, newNode) {

    if(newNode.data < rootNode.data) {
        let currentNode = rootNode.left
        if(currentNode) {
            findOrAdd(currentNode, newNode)
            return true
        } else {
            rootNode.left = newNode  
        }
    }

    if(newNode.data > rootNode.data) {
        let currentNode = rootNode.right
        if(currentNode) {
            findOrAdd(currentNode, newNode)
            return true
        } else {
            rootNode.right = newNode
        }
    }
}

function max(node) {
    return {data: 9, left: null, right: null}
}

function min(node) {
    return {data: 3, left: null, right: null}
}