# drawdb-extention

* Note 寬度可以自由調整
* Export SQL 時，Postgre sql的table name 建議不加雙引號，因為雙引號會嚴格敏感限制表格名稱大小寫，會造成給管理和查詢帶來混淆的風險。例如"Ticket"、"ticket" 加了雙引號視為不同的table name
* Table Summary 功能，可一目了然所有 Table 各個Column的設定(欄位名稱、資料型別、唯一值、主鍵、允許NULL、預設值、備註)
