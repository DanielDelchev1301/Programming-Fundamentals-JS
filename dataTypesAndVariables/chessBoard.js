function chessBoard(num) {
    console.log('<div class="chessboard">');
    let rows = 1;
    let columns = 1;
    if (num % 2 != 0) {
        for (let i = 1; i <= num; i++) {
            console.log('   <div>');
            for (let o = 1; o <= num; o++) {
                if (rows % 2 != 0) {
                    if (columns % 2 != 0) {
                        console.log('       <span class="black"></span>');
                    } else {
                        console.log('       <span class="white"></span>');
                    }
                    columns++;
                } else {
                    if (columns % 2 == 0) {
                        console.log('       <span class="white"></span>');
                    } else {
                        console.log('       <span class="black"></span>');
                    }
                    columns++;
                }
            }
            rows++;
            console.log('   </div>')
        }
    } else {
        for (let i = 1; i <= num; i++) {
            console.log('   <div>');
            for (let o = 1; o <= num; o++) {
                if (rows % 2 != 0) {
                    if (columns % 2 != 0) {
                        console.log('       <span class="black"></span>');
                    } else {
                        console.log('       <span class="white"></span>');
                    }
                    columns++;
                } else {
                    if (columns % 2 != 0) {
                        console.log('       <span class="white"></span>');
                    } else {
                        console.log('       <span class="black"></span>');
                    }
                    columns++;
                }
            }
            rows++;
            console.log('   </div>')
        } 
    }
    console.log('</div>');
}
chessBoard(4);