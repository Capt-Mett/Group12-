

export default {
    /**
     * 查看 array 里 存不存在 target
     * @param array
     * @param target
     * @returns {boolean}
     */
    contains(array, target) {
        for (let item of array) {
            if (item === target) {
                return true;
            }
        }
        return false;
    },


    /**
     * 查看字符串中 是否有子字符串
     * @param targetStr
     * @param str
     * @returns {boolean}
     */
    containsAny(targetStr, ...str) {
        for (let cur of str) {
            if (targetStr.search(cur) !== -1) {
                return true;
            }
        }
        return false;
    },


    /**
     * 将空 转换为 null
     * @param object
     * @param ignore 要忽略的字段
     */
    trimFieldsEmptyToNull(obj, ignore = []) {
        for (let key in obj) {
            if (this.contains(ignore, key)) {
                continue;
            }
            if (obj[key] === '') {
                obj[key] = null;
            }
        }
    },

    /**
     * obj 里面的  字段全部转换为 ''
     * @param obj
     * @param ignore
     */
    trimFieldsToEmpty(obj, ignore = []) {
        for (let key in obj) {
            if (this.contains(ignore, key)) {
                continue;
            }
            obj[key] = '';
        }
    },


    /**
     * 获取当天 0 点时间戳
     */
    getBeginOfDayAsTimestamp() {
        var now = new Date();

        // 将时间调整为今天 0 点
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);

        // 获取今天 0 点的时间戳
        return now.getTime();
    },


    /**
     * 获取当前日期
     * @returns {string}
     */
    getCurrentDateFormat() {
        let date = new Date();
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        return year + seperator1 + month + seperator1 + strDate;
    },

    /**
     * 获取上月日期
     * @returns {string}
     */
    getLastMonthDateFormat() {
        let date = new Date();
        let seperator1 = "-";
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if (month === 1) {
            month = 12;
            year--;
        }else {
            month--;
        }
        let strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        return year + seperator1 + month + seperator1 + strDate;
    },

    /**
     * 深拷贝
     * @param obj
     * @param copyFeilds
     * @returns {{}}
     */
    copyShallow(obj) {
        let copyObj = {};
        for (let key in obj) {
            copyObj[key] = obj[key];
        }
        return copyObj;
    },


    /**
     * 只拷贝 已被修改的变量
     * @param oldObj  旧
     * @param obj   新
     * @param copyFeilds  拷贝目标属性
     * @param ignore   忽略变更判断
     * @returns {{}}
     */
    copyShallowOnlyModified(oldObj, obj, copyFeilds = [], ignore = []) {
        let copyObj = {};
        let hasModified = false;
        for (let key in obj) {
            if (this.contains(copyFeilds, key)) {
                if (this.contains(ignore, key)) {
                    copyObj[key] = obj[key];
                    continue;
                }
                if (oldObj[key] !== obj[key]) {
                    copyObj[key] = obj[key];
                    hasModified = true;
                }
            }
        }
        return hasModified ? copyObj : null;
    },

    /**
     * 深拷贝 数组
     * @param target
     * @param ignore
     */
    copyArray(target) {
        let copyArray = [];
        for (let cur of target) {
            copyArray.push(cur);
        }
        return copyArray;
    },

    /**
     * 数字激增
     * @param that
     * @param num
     */
    numberSurge(that, num) {
        let intervalTime = num / 30.0;
        let timer = setInterval(() => {
            that.num = that.num + 1;
            if (num === that.num) {
                clearInterval(timer);
            }
        }, intervalTime);
    },

    /**
     * 时间戳 => str
     * @param {时间戳} timestamp
     * @returns
     */
    timestamp2Str(timestamp) {
        var date = new Date(timestamp);
        var Y = date.getFullYear() + "-";
        var M =
                (date.getMonth() + 1 < 10
                        ? "0" + (date.getMonth() + 1)
                        : date.getMonth() + 1) + "-";
        var D = this.fill0(date.getDate()) + " ";
        var h = this.fill0(date.getHours()) + ":";
        var m = this.fill0(date.getMinutes()) + ":";
        var s = this.fill0(date.getSeconds());
        return Y + M + D + h + m + s;
    },

    /**
     * 个位数则填充零
     * @param {数字} num
     * @returns
     */
    fill0(num) {
        return (num < 10 ? ("0" + num) : (num + ''));
    },
};



