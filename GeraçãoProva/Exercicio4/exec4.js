var el_up = document.getElementById("GFG_UP");
        var el_down = document.getElementById("GFG_DOWN");
        for (var a = [], i = 0; i <= 100; ++i) a[i] = i;  
        function createRandom(arr) {
            var tmp, cur, tp = arr.length;
            if (tp)
                while (--tp) { 
                    cur = Math.floor(Math.random() * (tp + 1)); 
                    tmp = arr[cur]; 
                    arr[cur] = arr[tp]; 
                    arr[tp] = tmp; 
                }
                
            return arr.filter(impar => impar % 2 === 1);
        }
  
        function gfg_Run() {
            el_down.innerHTML = createRandom(a);
        }