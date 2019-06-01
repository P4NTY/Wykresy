var chart = Tornado();

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

