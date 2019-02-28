export const data = [{
    id:1,
    text:"Root",
    icon:"chevron-right",
    expanded:false,
    children:[{
        id:3,
        selected: true,
        checked: false,
        text:"Child 1",
        iconObj: {
            name: 'chevron-right',
            size: '2x',
            spin: false,
            style: { color: 'red' }
        },
        children:[{id:5, text:"Grandchild 1"}]
        }
    ]
},{
    id:1,
    text:"Root",
    icon:"chevron-right",
    expanded:false,
    children:[{
        id:3,
        selected: true,
        checked: false,
        text:"Child 1",
        iconObj: {
            name: 'chevron-right',
            size: '2x',
            spin: false,
            style: { color: 'red' }
        },
        children:[{id:5, text:"Grandchild 1"}]
        }
    ]
}]