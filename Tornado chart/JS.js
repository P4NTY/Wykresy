var Tornado = function() {

    var chart = new Object();

    chart.config = {
        container: 'tornado_chart',
        width: 500,
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

    return chart;
};


var chart = Tornado();
/*
    chart.set_data([
        {
            level: 1,
            level_name: 'Poziom_1',
            level_count : null,
            left_elements: [
                {
                    value: 91750,
                    name: 'element 1',
                },
                {
                    value: 910,
                    name: 'element 2',
                }
                ],
            right_elements: []
        },
        {
            level: 2,
            level_name: 'Poziom_2',
            level_count : null,
            left_elements:
            [
                {
                    value: 10151,
                    name: 'element 3',
                }
            ],
            right_elements:
            [
                {
                    value: 43031,
                    name: 'element 4',
                }
            ]
        },
        {
            level: 3,
            level_name: 'Pozim 3',
            level_count : null,
            left_elements:
            [
                {
                    value: 3022,
                    name: 'element 5'
                }
            ],
            right_elements:
            [
                {
                    value: 17842,
                    name: 'element 6',
                }
            ]
        },
        {
            level: 4,
            level_name: 'Pozim 4',
            level_count : null,
            left_elements:
            [
                {
                    value: 552,
                    name: 'element 7'
                }
            ],
            right_elements:
            [
                {
                    value: 2629,
                    name: 'element 8'
                }
            ]
        }
    ]);
*/

/* level, level name, element name , value , side  */
chart.set_data([
    ['1','Poziom 1', 'element 1', '91750', '0'],
    ['1','Poziom 1', 'element 2', '910', '0'],
    ['2','Poziom 2', 'element 3', '10151', '0'],
    ['2','Poziom 2', 'element 4', '43031', '1'],
    ['3','Poziom 3', 'element 5', '3022', '0'],
    ['3','Poziom 3', 'element 6', '17842', '1'],
    ['4','Poziom 4', 'element 7', '522', '0'],
    ['4','Poziom 4', 'element 8', '2629', '1'],
  ])