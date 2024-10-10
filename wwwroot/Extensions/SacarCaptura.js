function sacaCaptura(viewer) {
    viewer.getScreenShot(1920, 1080, function (blobURL) {
        fetch(blobURL)
            .then(res => res.blob())
            .then(blob => {
                const formData = new FormData();
                formData.append('image', blob, 'capture.png');
                fetch('http://127.0.0.1:8188/upload/image', {
                    method: 'POST',
                    mode: 'no-cors',
                    body: formData
                })
                    /*.then(response => response.json())
                    .then(data => {
                        // Aquí puedes manejar la respuesta
                        console.log('Imagen fotorrealista generada:', data);
                    })*/
                    .catch(error => console.error('Error:', error));
            });
    });
}