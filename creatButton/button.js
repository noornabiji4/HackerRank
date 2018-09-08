var button = document.getElementById("btn");
    button.addEventListener("click",function() {
        var current_value = this.innerHTML;
        this.innerHTML = parseInt(current_value)+1;
    });
