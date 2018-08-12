export function fetchProductType(){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/productTypes')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'FETCH_PRODUCT_TYPE',
                payload: data
            })
        })
    }
}

export function addProductType(productType){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/productTypes', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'post', 
            body: JSON.stringify(productType)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'ADD_PRODUCT_TYPE',
                payload: data
            })
        })
    }
}

export function updateProductType(product){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/productTypes', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'put', 
            body: JSON.stringify(product)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch(fetchProductType())
        })
    }
}

export function deleteProductType(id){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/productTypes/'+id, {
            method: 'delete'
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'DELETE_PRODUCT_TYPE',
                payload: id
            })
        })
    }
}

export function getProductType(id){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/productTypes/'+id)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)
            dispatch({
                type: 'EDIT_PRODUCT_TYPE',
                payload: data
            })
        })
    }
}


export function fetchProduct(){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/products')
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'FETCH_PRODUCT',
                payload: data
            })
        })
    }
}

export function addProduct(product){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/products', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'post', 
            body: JSON.stringify(product)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'ADD_PRODUCT',
                payload: data
            })
        })
    }
}

export function updateProduct(product){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/products', {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            method: 'put', 
            body: JSON.stringify(product)
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch(fetchProduct())
        })
    }
}

export function deleteProduct(id){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/products/'+id, {
            method: 'delete'
        })
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'DELETE_PRODUCT',
                payload: id
            })
        })
    }
}

export function getProduct(id){
    return function(dispatch){
        fetch('http://rmit.chickenkiller.com:8080/products/'+id)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            dispatch({
                type: 'EDIT_PRODUCT',
                payload: data
            })
        })
    }
}
