/**
 * Rappresenta un cliente di un negozio
 * @class
 */
class Operator {
  constructor(
    nickname,
    title,
    memberSince,
    isAdmin,
    isEditor,
    isSL,
    isTL,
    isMG,
    isMed,
    isGL,
    isAT,
    isEod,
    isMK,
    isPilot,
    isCrew,
    isArty,
    isScout
  ) {
    if (typeof nickname !== 'string')
      throw new TypeError('Nickname must be a string')
    if (typeof nickname !== 'string')
      throw new TypeError('Title must be a string')
    if (typeof memberSince !== 'object')
      throw new TypeError('memberSince must be an object')
    if (typeof isAdmin !== 'boolean')
      throw new TypeError('isAdmin must be a boolean')
    if (typeof isEditor !== 'boolean')
      throw new TypeError('isEditor must be a boolean')
    if (typeof isSL !== 'boolean') throw new TypeError('isSL must be a boolean')
    if (typeof isTL !== 'boolean') throw new TypeError('isTL must be a boolean')
    if (typeof isMG !== 'boolean') throw new TypeError('isMG must be a boolean')
    if (typeof isMed !== 'boolean')
      throw new TypeError('isMed must be a boolean')
    if (typeof isGL !== 'boolean') throw new TypeError('isGL must be a boolean')
    if (typeof isAT !== 'boolean') throw new TypeError('isAT must be a boolean')
    if (typeof isEod !== 'boolean')
      throw new TypeError('isEod must be a boolean')
    if (typeof isMK !== 'boolean') throw new TypeError('isMK must be a boolean')
    if (typeof isPilot !== 'boolean')
      throw new TypeError('isPilot must be a boolean')
    if (typeof isCrew !== 'boolean')
      throw new TypeError('isCrew must be a boolean')
    if (typeof isArty !== 'boolean')
      throw new TypeError('isArty must be a boolean')
    if (typeof isScout !== 'boolean')
      throw new TypeError('isScout must be a boolean')

    this.nickname = nickname
    this.title = title
    this.memberSince = memberSince
    this.isAdmin = isAdmin
    this.isEditor = isEditor
    this.isSL = isSL
    this.isTL = isTL
    this.isMG = isMG
    this.isMed = isMed
    this.isGL = isGL
    this.isAT = isAT
    this.isEod = isEod
    this.isMK = isMK
    this.isPilot = isPilot
    this.isCrew = isCrew
    this.isArty = isArty
    this.isScout = isScout
  }
}

class FireTeam_4 {
  constructor(TL, MG, Med, RM) {
    if (!(TL instanceof Operator)) throw new TypeError('TL must be an Operator')
    if (!(MG instanceof Operator)) throw new TypeError('MG must be an Operator')
    if (!(Med instanceof Operator))
      throw new TypeError('Med must be an Operator')
    if (!(RM instanceof Operator)) throw new TypeError('RM must be an Operator')

    this.TL = TL
    this.MG = MG
    this.Med = Med
    this.RM = RM
  }
}

class FireTeam_5 {
  constructor(SL, TL, MG, Med, RM) {
    if (!(SL instanceof Operator)) throw new TypeError('SL must be an Operator')
    if (!(TL instanceof Operator)) throw new TypeError('TL must be an Operator')
    if (!(MG instanceof Operator)) throw new TypeError('MG must be an Operator')
    if (!(Med instanceof Operator))
      throw new TypeError('Med must be an Operator')
    if (!(RM instanceof Operator)) throw new TypeError('RM must be an Operator')

    this.SL = SL
    this.TL = TL
    this.MG = MG
    this.Med = Med
    this.RM = RM
  }
}

class PlatCo {
  constructor(PL, PS, PM) {
    if (!(PL instanceof Operator)) throw new TypeError('PL must be an Operator')
    if (!(PS instanceof Operator)) throw new TypeError('PS must be an Operator')
    if (!(PM instanceof Operator)) throw new TypeError('PM must be an Operator')

    this.PL = PL
    this.PS = PS
    this.PM = PM
  }
}

module.exports = {
  Operator,
  FireTeam_4,
  FireTeam_5,
  PlatCo,
}
