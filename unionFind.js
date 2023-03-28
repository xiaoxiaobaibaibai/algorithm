class UnionFind {
    //用来解决不同节点间是否拥有相同根的问题
    constructor(n) {
        this.parent = [] //并查集
        this.size = [] //每个节点下拥有的总节点数目
        this.count = 0
        this.init(n)
    }
    //初始化一个并查集
    init(n) {
        this.parent.length = 0
        for (let i = 0; i < n; i++) {
            this.parent[i] = i
        }
        this.count = n
        this.size = new Array(n).fill(1)
    }
    // 在并查集中找到节点node的根节点
    find(node) {
        while (node != this.parent[node]) {
            // 路径压缩，每次查找时都将子节点的父节点设置为父节点的父节点。这样能够不停的扁平化查询树。
            this.parent[node] = this.parent[this.parent[node]]
            node = this.parent[node]
        }
        return node
    }
    //判断两个节点的根节点是不是同一个
    same(left, right) {
        return this.find(left) == this.find(right)
    }
    // 将两个节点关联起来,即两个节点共有一个根节点.和并是将两个节点的根节点合并起来
    union(left, right) {
        let l = this.find(left)
        let r = this.find(right)
        if (l != r) {
            // 左边较小，因此将左边合并到右边的树上
            if (this.size[l] < this.size[r]) {
                this.parent[l] = r
                this.size[r] += this.size[l]
            } else {
                this.parent[r] = l
                this.size[l] += this.size[r]
            }
            // 连通分量减1
            this.count--
            return true
        }
        return false
    }
    //获取总共分了多少组
    getCount() {
        return this.count
    }
}