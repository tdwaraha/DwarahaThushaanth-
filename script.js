

    function PDF(){
        const e = document.querySelector(".container");

        // RESIZE
        e.style.maxWidth = "700px";
        
        // OPTIONS
        const opt = {
            filename: 'resume.pdf',
            image: {
                type: "jpg",
                quality: 0.99
            },
            margin: 0,
            jsPDF: {
                unit: "pt",
                format: "letter",
                orientation: "portrait"
            },
            pagebreak: {
                mode: ["avoid-all", "css", "legacy"]
            }
        };
        html2pdf().set(opt).from(e).save();

        // RESIZE
        setTimeout(() => {e.style.maxWidth = "1400px";}, 2000);
    }

