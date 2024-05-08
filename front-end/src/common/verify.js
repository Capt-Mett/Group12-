/**
 * 用于验证
 */
const fieldsDesc = {
};

module.exports = {

    /**
     * 检查对象是否为空
     * @param {Object} obj 检查对象
     * @param {Array} ignore 忽略字段
     * @returns 
     */
    emptyCheckObject: function (obj,ignore = []) {
        return new Promise((resolve,reject) => {
            let res = {
                isPass: true,
                message: ''
            };

            for (let key in obj) {
                let isContains = false;
                for (let index in ignore) {
                    if (ignore[index] === key) {
                        isContains = true;
                        break;
                    }
                }
                if (!isContains) {
                    if (obj[key] == null || obj[key] === '') {
                        let desc = fieldsDesc[key] === null || fieldsDesc[key] === undefined ? key : fieldsDesc[key];
                        res.message += (res.isPass) ? desc : '、' + desc;
                        res.isPass = false
                    }
                }

            }
            res.message += res.isPass === false ? '  不能为空' : '';
            if (!res.isPass) {
                reject(res.message);
            }else {
                resolve(obj);
            }
        })
    },
    checkPhone(phone) {
        return /^1[3|4|5|7|8]\d{9}$/.test(Number(phone));
    },
    checkEmail(email) {
        return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email)
    },
    checkPrice(price) {
        return /^(-)?\d+(\.\d+)?$/.test(Number(price));
    },
    checkPositiveInteger(number) {
        return /^[+]{0,1}(\d+)$/.test(Number(number));
    },
    // 正则验证密码，包含数字、大小写字母、特殊字符，长度8-16位
    checkPassword(password) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,16}$/.test(password);
    },
    checkIdentityCode(identityCode) {
        return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(identityCode) ||
               /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(identityCode);
    }
}