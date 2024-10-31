class RuleEval {
    ruleSet = new Map();
    results = [];
    addRule(rule, result) {
        this.ruleSet.set(rule, result);
    }
    evalRules(domain) {
        this.results = [];
        for (const [rule, result] of this.ruleSet) {
            if (rule(domain)) this.results.push({ rule, result });
        }
        return this.results;
    }
}

export default RuleEval;