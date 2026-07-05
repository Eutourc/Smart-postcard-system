# Data Flow

## Memorial Event

`00_Core/data/event.schema.json` 定义纪念事件基础结构。

03_Map 创建/更新事件数据：

- place
- gps
- date
- time
- weather
- temperature
- note

04_Note 读取：

- note
- place
- date

09_Postmark 读取：

- date

10_Album 读取：

- cover
- postcards
- note
- place
- date
