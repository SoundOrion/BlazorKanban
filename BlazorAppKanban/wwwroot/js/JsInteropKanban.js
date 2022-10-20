//http://www.tractionsoftware.jp/traction/permalink/Blog1776
//https://qiita.com/t_ngmn/items/9a322a5b806955c7e43f

export function createKanban()
{
    // カンバンに表示されるカラムやカードを定義
    var dataContent = [
        {
            "id": "column-id-1",
            "title": "カラム (1)",
            "item": [
                {
                    "id": "item-id-1",
                    "title": "カード 1"
                },
                {
                    "id": "item-id-2",
                    "title": "カード 2"
                }
            ]
        },
        {
            "id": "column-id-2",
            "title": "カラム (2)",
            "item": [
                {
                    "id": "item-id-3",
                    "title": "カード 3"
                }
            ]
        },
        {
            "id": "column-id-3",
            "title": "カラム (3)",
            "item": [
                {
                    "id": "item-id-4",
                    "title": "カード 4"
                },
                {
                    "id": "item-id-5",
                    "title": "カード 5"
                }
            ]
        }
    ];

    // ここで jKanban を実行する
    var dataset = {
        element: '#kanban-canvas',  // カンバンを表示する場所のID
        boards: dataContent,        // カンバンに表示されるカラムやカードのデータ
        gutter: '16px',             // カンバンの余白
        widthBoard: '250px',        // カラムの幅 (responsivePercentageの「true」設定により無視される)
        responsivePercentage: true, // trueを選択時はカラム幅は％で指定され、gutterとwidthBoardの設定は不要
        dragItems: true,            // trueを選択時はカードをドラッグ可能
        dragBoards: true            // カラムをドラッグ可能にするかどうか
    };

    new jKanban(dataset);

    //var kanban = new jKanban({ element: '#kanban-canvas', });

    //var kanban = new jKanban({
    //    //element: '#kanban-canvas',
    //});

    //;  // カンバンを表示する場所のID
    //kanban.boards = dataContent;        // カンバンに表示されるカラムやカードのデータ
    //kanban.gutter = '16px';             // カンバンの余白
    //kanban.widthBoard = '250px';        // カラムの幅 (responsivePercentageの「true」設定により無視される)
    //kanban.responsivePercentage = true; // trueを選択時はカラム幅は％で指定され、gutterとwidthBoardの設定は不要
    //kanban.dragItems = true;            // trueを選択時はカードをドラッグ可能
    //kanban.dragBoards = true;           // カラムをドラッグ可能にするかどうか

}