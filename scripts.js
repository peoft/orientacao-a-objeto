class ContaBancaria{
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(value) {
        this._saldo = val;
    }

    sacar (value) {
        if (value > this._saldo) {
            return 'Saldo insuficiente';
        }
        this._saldo -= value;
        return this._saldo;        
    }

    depositar(value) {
        this._saldo +=value;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this._cartaoCredito = cartaoCredito;
        this.tipo = 'corrente';
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(value) {
        this._cartaoCredito = value;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero ) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(value) {
        if (value > this._saldo) {
            return 'Saldo insuficiente';
        }        
        if (value > 500) {
            return 'Valor acima do permitido';
        }
        this._saldo -= value;
        return this._saldo;
    }
}