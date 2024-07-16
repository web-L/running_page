## 更新 GPX_OUT

- 复制 `.gpx` 文件到 `GPX_OUT` 文件夹
- 运行 `python3 run_page/gpx_sync.py\n`
- 更新年度 `year` 文件夹：
  
  ``` python3 run_page/gen_svg.py --from-db --title "Ali Running" --type grid --athlete "Ali"  --output assets/grid.svg --min-distance 0.1 --special-color "#4dd2ff" --special-color2 red --special-distance 2 --special-distance2 5 --use-localtime```

- 更新环形地图：```python3 run_page/gen_svg.py --from-db --type circular --use-localtime\n```

- 更新 github 图形：```python3 run_page/gen_svg.py --from-db --title "Ali Running" --type github --athlete "Ali" --special-distance 10 --special-distance2 20 --special-color yellow --special-color2 red --output assets/github.svg --use-localtime --min-distance 0.```

- 更新 github 主页链接：
  - 在项目 `running_page` 的 `Actions`，左则菜单中点击 `Run Data Sync`
  - 右则表格中点击 `Run Data Sync`