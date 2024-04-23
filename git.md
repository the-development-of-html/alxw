git指令的一些重点操作，首先时要初始化git
1.git init -b alxw 初始化git并且创造一个alxw分支
2.git config --global user.name/user.email 设置自己的仓库名和仓库邮箱
3.git add . 将文件添加到缓存区中
3.git commit -m '添加时候的标签'  将文件提交到本地仓库并且添加信息 
4.git push 将文件提交到远程般的版本库中
5.git remote add origin http://github.com/the-development-of-html/alxw.git 将当前目录下的git仓库和远程仓库关联
6.git push -u origin alxw 将本地alxw分支发送到远程的仓库的origin仓库中去
7.在远程仓库拉取一个分支 
8.git branch -m oldname newname 修改本地的分支名称
9.git remote show origin  查看远程分支的具体信
10.修改远程的仓库名
11.git status  可以使用来查看当前git仓库下的修改状态
12.git log 查看工作日志，也就是可以查看git的commit情况,同时可以拿到commit id， 方便在不同的版本之间回退处理
13.git reset --hard <id> 回到某一个特定的版本
14.git reflog 可以总结的展示当前仓库的提交信息
15.git checkout --<文件名> 将文件修改到刚提交的时候,可以直接放弃掉工作区的修改
16.git reset HEAD <file> 即使不小心将文件放去暂缓区了之后也可以恢复
17.git remote rm <仓库名称>  如果远程仓库的名称或者地址出现错误，那么进行修改
// 注意事项：如果使用ssh协议进行clone或者push的时候，可能会需要验证服务器的key值，输入yes
18.git merge <分支名>  将目标分支合并到当前分支上
19.git push <仓库名> <本地分支>:<远程分支>   git push origin master:dev 将本地的master分支推送到origin仓库的dev分支,如果远程分支不存在的话就创建一个分支
20.git push origin --delete <远程仓库分支>  
21.git branch -d <分支> 删除本地分支
<<<<<<< HEAD
22.git log --graph --pretty=oneline --abbrev-commit   查看分支历史，查看分支的图
23.git stash 如果当前的项目文件不能commit，但是需要切换到其他分支来修改问题
git stash-- 暂时隐藏当前的工作区 / git stash list 查看stash的记录
git satsh apply @stash@{0} 回到某一次stash / git stash pop 回到上一次stash 并且删除记录q
24.git cherry-pick 将修改bug的操作和进来，因为master上的bug当前的分支也有
=======
>>>>>>> a2faea7718cd28a407f2b2a5bebd1f85566430f1
// 我们在这里修改了一个bug
