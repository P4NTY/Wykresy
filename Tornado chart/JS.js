var Tornado = function() {

    var chart = new Object();

    chart.config = {
        container: 'tornado_chart',
        width: 500,
        min_width: 30,
        data: null,
        left_side: {
            color: '#1258DC',
        },
        right_side: {
            color: '#FB8604',
        }
    }

    var _mapOrder = function(array, order, key) {
        array.sort(function(a, b) {
        var A = a[key],
            B = b[key];
        if (order.indexOf(A) > order.indexOf(B)) {
            return 1;
        } else {
            return -1;
        }
        });
        return array;
    }

    chart._level_sum = function() {
        chart.config.data.forEach(item => {
            console.log(item)
            left = 0 , right = 0;
            if ( item.left_elements != [] ) {
                item.left_elements.forEach(element => {
                    left += element.value;
                });
            }
            if ( item.right_elements != [] ) {
                item.right_elements.forEach(element => {
                    right += element.value;
                });
            }
            item.level_count = [ left , right ];
        });

    }

    chart.set_data = function(import_data) {
        /* Array = [[ level, level name, element name , value , side ], ] */
        if ( import_data.toString().includes('Object') ){
            chart.config.data = import_data;
        }
        else
        {
            var Array_temp = [];
            import_data.forEach(row => {
                var left = null, right = null;
                if ( parseInt(row[4]) == 0 || row[4] == 'left' ) {
                    left = { value: parseFloat(row[3]) , name: row[2] }
                }
                else {
                    right = { value: parseFloat(row[3]) , name: row[2] }
                }
                exist = false;
                Array_temp.forEach(element => {
                    if (element.level == row[0] ) {
                        exist = true;
                        elem = element;
                    }
                });

                if ( exist ){
                    left != null ? elem.left_elements.push(left) : '';
                    right != null ? elem.right_elements.push(right) : '';
                }
                else {
                    temp = {
                        level: row[0],
                        level_count: null,
                        level_name: row[1],
                        right_elements: right != null ? [right] : [],
                        left_elements: left != null ? [left] : []
                    };
                    Array_temp.push(temp);
                }

            });
        }
        chart.config.data = Array_temp;
        chart._level_sum();

    }

    chart.build = function() {
        view = document.createDocumentFragment();
        items_count = 0;

        chart.config.data.forEach(element => {
            items_count += element.left_elements.length + element.right_elements.length;
        })
        jump = chart.width / (items_count - 1 )
    }

    return chart;
};