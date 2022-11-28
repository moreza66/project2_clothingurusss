async function newFormHandler(event) {
    event.preventDefault();
    // had to remove this prevent in order for uploads to work
    // event.preventDefault(); 

    const product = document.querySelector('input[name="product"]').value;
    const size = document.querySelector('input[name="size"]').value;
    const color = document.querySelector('input[name="color"]').value;
    const price = document.querySelector('input[name="price"]').value;
   

    const response = await fetch(`/api/clothing_product`, {
        method: 'POST',
        body: JSON.stringify({
            product,
            size,
            color,
            price
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);