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
