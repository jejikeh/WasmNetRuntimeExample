var __dotnet_runtime = (function (exports) {
  "use strict";
  var ProductVersion = "7.0.0",
    Configuration = "Release";
  const MonoObjectNull = 0,
    MonoArrayNull = 0,
    MonoAssemblyNull = 0,
    MonoTypeNull = 0,
    MonoStringNull = 0,
    MonoObjectRefNull = 0,
    JSHandleDisposed = -1,
    JSHandleNull = 0,
    VoidPtrNull = 0,
    CharPtrNull = 0;
  function coerceNull(e) {
    return null === e || void 0 === e ? 0 : e;
  }
  const wasm_type_symbol = Symbol.for("wasm type");
  function is_nullish(e) {
    return void 0 === e || null === e;
  }
  let Module,
    MONO$1,
    BINDING$1,
    INTERNAL$1,
    ENVIRONMENT_IS_ESM,
    ENVIRONMENT_IS_NODE,
    ENVIRONMENT_IS_SHELL,
    ENVIRONMENT_IS_WEB,
    locateFile,
    quit,
    ExitStatus,
    requirePromise,
    monoConfig;
  function setImportsAndExports(e, o) {
    (MONO$1 = o.mono),
      (BINDING$1 = o.binding),
      (INTERNAL$1 = o.internal),
      (Module = o.module),
      (ENVIRONMENT_IS_ESM = e.isESM),
      (ENVIRONMENT_IS_NODE = e.isNode),
      (ENVIRONMENT_IS_SHELL = e.isShell),
      (ENVIRONMENT_IS_WEB = e.isWeb),
      (locateFile = e.locateFile),
      (quit = e.quit_),
      (ExitStatus = e.ExitStatus),
      (requirePromise = e.requirePromise);
  }
  let runtime_is_ready = false;
  const runtimeHelpers = {
      namespace: "System.Runtime.InteropServices.JavaScript",
      classname: "Runtime",
      get mono_wasm_runtime_is_ready() {
        return runtime_is_ready;
      },
      set mono_wasm_runtime_is_ready(e) {
        (runtime_is_ready = e), (INTERNAL$1.mono_wasm_runtime_is_ready = e);
      },
      get config() {
        return monoConfig;
      },
      set config(e) {
        (monoConfig = e), (MONO$1.config = e), (Module.config = e);
      },
      fetch: null,
    },
    fn_signatures$1 = [
      ["mono_wasm_register_root", "number", ["number", "number", "string"]],
      ["mono_wasm_deregister_root", null, ["number"]],
      [
        "mono_wasm_string_get_data",
        null,
        ["number", "number", "number", "number"],
      ],
      [
        "mono_wasm_string_get_data_ref",
        null,
        ["number", "number", "number", "number"],
      ],
      ["mono_wasm_set_is_debugger_attached", "void", ["bool"]],
      [
        "mono_wasm_send_dbg_command",
        "bool",
        ["number", "number", "number", "number", "number"],
      ],
      [
        "mono_wasm_send_dbg_command_with_parms",
        "bool",
        ["number", "number", "number", "number", "number", "number", "string"],
      ],
      ["mono_wasm_setenv", null, ["string", "string"]],
      ["mono_wasm_parse_runtime_options", null, ["number", "number"]],
      ["mono_wasm_strdup", "number", ["string"]],
      ["mono_background_exec", null, []],
      ["mono_set_timeout_exec", null, []],
      ["mono_wasm_load_icu_data", "number", ["number"]],
      ["mono_wasm_get_icudt_name", "string", ["string"]],
      ["mono_wasm_add_assembly", "number", ["string", "number", "number"]],
      [
        "mono_wasm_add_satellite_assembly",
        "void",
        ["string", "string", "number", "number"],
      ],
      ["mono_wasm_load_runtime", null, ["string", "number"]],
      ["mono_wasm_exit", null, ["number"]],
      ["mono_wasm_change_debugger_log_level", "void", ["number"]],
      ["mono_wasm_get_corlib", "number", []],
      ["mono_wasm_assembly_load", "number", ["string"]],
      ["mono_wasm_find_corlib_class", "number", ["string", "string"]],
      [
        "mono_wasm_assembly_find_class",
        "number",
        ["number", "string", "string"],
      ],
      ["mono_wasm_find_corlib_type", "number", ["string", "string"]],
      [
        "mono_wasm_assembly_find_type",
        "number",
        ["number", "string", "string"],
      ],
      [
        "mono_wasm_assembly_find_method",
        "number",
        ["number", "string", "number"],
      ],
      [
        "mono_wasm_invoke_method",
        "number",
        ["number", "number", "number", "number"],
      ],
      [
        "mono_wasm_invoke_method_ref",
        "void",
        ["number", "number", "number", "number", "number"],
      ],
      ["mono_wasm_string_get_utf8", "number", ["number"]],
      [
        "mono_wasm_string_from_utf16_ref",
        "void",
        ["number", "number", "number"],
      ],
      ["mono_wasm_get_obj_type", "number", ["number"]],
      ["mono_wasm_array_length", "number", ["number"]],
      ["mono_wasm_array_get", "number", ["number", "number"]],
      ["mono_wasm_array_get_ref", "void", ["number", "number", "number"]],
      ["mono_wasm_obj_array_new", "number", ["number"]],
      ["mono_wasm_obj_array_new_ref", "void", ["number", "number"]],
      ["mono_wasm_obj_array_set", "void", ["number", "number", "number"]],
      ["mono_wasm_obj_array_set_ref", "void", ["number", "number", "number"]],
      ["mono_wasm_register_bundled_satellite_assemblies", "void", []],
      [
        "mono_wasm_try_unbox_primitive_and_get_type_ref",
        "number",
        ["number", "number", "number"],
      ],
      [
        "mono_wasm_box_primitive_ref",
        "void",
        ["number", "number", "number", "number"],
      ],
      ["mono_wasm_intern_string_ref", "void", ["number"]],
      ["mono_wasm_assembly_get_entry_point", "number", ["number"]],
      ["mono_wasm_get_delegate_invoke_ref", "number", ["number"]],
      ["mono_wasm_string_array_new_ref", "void", ["number", "number"]],
      [
        "mono_wasm_typed_array_new_ref",
        "void",
        ["number", "number", "number", "number", "number"],
      ],
      ["mono_wasm_class_get_type", "number", ["number"]],
      ["mono_wasm_type_get_class", "number", ["number"]],
      ["mono_wasm_get_type_name", "string", ["number"]],
      ["mono_wasm_get_type_aqn", "string", ["number"]],
      [
        "mono_wasm_event_pipe_enable",
        "bool",
        ["string", "number", "string", "bool", "number"],
      ],
      ["mono_wasm_event_pipe_session_start_streaming", "bool", ["number"]],
      ["mono_wasm_event_pipe_session_disable", "bool", ["number"]],
      ["mono_wasm_string_from_js", "number", ["string"]],
      ["mono_wasm_exit", "void", ["number"]],
      ["mono_wasm_set_main_args", "void", ["number", "number"]],
      ["mono_wasm_enable_on_demand_gc", "void", ["number"]],
      ["mono_profiler_init_aot", "void", ["number"]],
      ["mono_wasm_exec_regression", "number", ["number", "string"]],
      ["mono_wasm_write_managed_pointer_unsafe", "void", ["number", "number"]],
      ["mono_wasm_copy_managed_pointer", "void", ["number", "number"]],
      ["mono_wasm_i52_to_f64", "number", ["number", "number"]],
      ["mono_wasm_u52_to_f64", "number", ["number", "number"]],
      ["mono_wasm_f64_to_i52", "number", ["number", "number"]],
      ["mono_wasm_f64_to_u52", "number", ["number", "number"]],
    ],
    wrapped_c_functions = {};
  for (const e of fn_signatures$1) {
    const o = wrapped_c_functions;
    o[e[0]] = function (...t) {
      const n = Module.cwrap(e[0], e[1], e[2], e[3]);
      return (o[e[0]] = n), n(...t);
    };
  }
  function wrap_c_function(e) {
    const o = wrapped_c_functions,
      t = fn_signatures$1.find((o) => o[0] === e);
    if (!t) throw new Error(`Assert failed: Function ${e} not found`);
    const n = Module.cwrap(t[0], t[1], t[2], t[3]);
    return (o[t[0]] = n), n;
  }
  const alloca_stack = [],
    alloca_buffer_size = 32768;
  let alloca_base,
    alloca_offset,
    HEAPI64 = null;
  function _ensure_allocated() {
    alloca_base ||
      ((alloca_base = Module._malloc(alloca_buffer_size)),
      (alloca_offset = alloca_base));
  }
  const is_bigint_supported =
    "undefined" !== typeof BigInt && "undefined" !== typeof BigInt64Array;
  function _create_temp_frame() {
    _ensure_allocated(), alloca_stack.push(alloca_offset);
  }
  function _release_temp_frame() {
    if (!alloca_stack.length)
      throw new Error("No temp frames have been created at this point");
    alloca_offset = alloca_stack.pop();
  }
  function assert_int_in_range(e, o, t) {
    if (!Number.isSafeInteger(e))
      throw new Error(
        `Assert failed: Value is not an integer: ${e} (${typeof e})`
      );
    if (!(e >= o && e <= t))
      throw new Error(
        `Assert failed: Overflow: value ${e} is out of ${o} ${t} range`
      );
  }
  function _zero_region(e, o) {
    e % 4 === 0 && o % 4 === 0
      ? Module.HEAP32.fill(0, e >>> 2, o >>> 2)
      : Module.HEAP8.fill(0, e, o);
  }
  function setB32(e, o) {
    const t = !!o;
    "number" === typeof o && assert_int_in_range(o, 0, 1),
      (Module.HEAP32[e >>> 2] = t ? 1 : 0);
  }
  function setU8(e, o) {
    assert_int_in_range(o, 0, 255), (Module.HEAPU8[e] = o);
  }
  function setU16(e, o) {
    assert_int_in_range(o, 0, 65535), (Module.HEAPU16[e >>> 1] = o);
  }
  function setU32_unchecked(e, o) {
    Module.HEAPU32[e >>> 2] = o;
  }
  function setU32(e, o) {
    assert_int_in_range(o, 0, 4294967295), (Module.HEAPU32[e >>> 2] = o);
  }
  function setI8(e, o) {
    assert_int_in_range(o, -128, 127), (Module.HEAP8[e] = o);
  }
  function setI16(e, o) {
    assert_int_in_range(o, -32768, 32767), (Module.HEAP16[e >>> 1] = o);
  }
  function setI32_unchecked(e, o) {
    Module.HEAP32[e >>> 2] = o;
  }
  function setI32(e, o) {
    assert_int_in_range(o, -2147483648, 2147483647),
      (Module.HEAP32[e >>> 2] = o);
  }
  function autoThrowI52(e) {
    if (0 !== e)
      switch (e) {
        case 1:
          throw new Error("value was not an integer");
        case 2:
          throw new Error("value out of range");
        default:
          throw new Error("unknown internal error");
      }
  }
  function setI52(e, o) {
    if (!Number.isSafeInteger(o))
      throw new Error(
        `Assert failed: Value is not a safe integer: ${o} (${typeof o})`
      );
    const t = undefined;
    autoThrowI52(wrapped_c_functions.mono_wasm_f64_to_i52(e, o));
  }
  function setU52(e, o) {
    if (!Number.isSafeInteger(o))
      throw new Error(
        `Assert failed: Value is not a safe integer: ${o} (${typeof o})`
      );
    if (!(o >= 0))
      throw new Error(
        "Assert failed: Can't convert negative Number into UInt64"
      );
    const t = undefined;
    autoThrowI52(wrapped_c_functions.mono_wasm_f64_to_u52(e, o));
  }
  function setI64Big(e, o) {
    if (!is_bigint_supported)
      throw new Error("Assert failed: BigInt is not supported.");
    HEAPI64[e >>> 3] = o;
  }
  function setF32(e, o) {
    Module.HEAPF32[e >>> 2] = o;
  }
  function setF64(e, o) {
    Module.HEAPF64[e >>> 3] = o;
  }
  function getB32(e) {
    return !!Module.HEAP32[e >>> 2];
  }
  function getU8(e) {
    return Module.HEAPU8[e];
  }
  function getU16(e) {
    return Module.HEAPU16[e >>> 1];
  }
  function getU32(e) {
    return Module.HEAPU32[e >>> 2];
  }
  function getI8(e) {
    return Module.HEAP8[e];
  }
  function getI16(e) {
    return Module.HEAP16[e >>> 1];
  }
  function getI32(e) {
    return Module.HEAP32[e >>> 2];
  }
  function getI52(e) {
    const o = wrapped_c_functions.mono_wasm_i52_to_f64(
        e,
        runtimeHelpers._i52_error_scratch_buffer
      ),
      t = undefined;
    return autoThrowI52(getI32(runtimeHelpers._i52_error_scratch_buffer)), o;
  }
  function getU52(e) {
    const o = wrapped_c_functions.mono_wasm_u52_to_f64(
        e,
        runtimeHelpers._i52_error_scratch_buffer
      ),
      t = undefined;
    return autoThrowI52(getI32(runtimeHelpers._i52_error_scratch_buffer)), o;
  }
  function getI64Big(e) {
    if (!is_bigint_supported)
      throw new Error("Assert failed: BigInt is not supported.");
    return HEAPI64[e >>> 3];
  }
  function getF32(e) {
    return Module.HEAPF32[e >>> 2];
  }
  function getF64(e) {
    return Module.HEAPF64[e >>> 3];
  }
  function afterUpdateGlobalBufferAndViews(e) {
    is_bigint_supported && (HEAPI64 = new BigInt64Array(e));
  }
  function withStackAlloc(e, o, t, n, r) {
    const _ = Module.stackSave(),
      s = Module.stackAlloc(e);
    try {
      return o(s, t, n, r);
    } finally {
      Module.stackRestore(_);
    }
  }
  const maxScratchRoots = 8192;
  let _scratch_root_buffer = null,
    _scratch_root_free_indices = null,
    _scratch_root_free_indices_count = 0;
  const _scratch_root_free_instances = [],
    _external_root_free_instances = [];
  function mono_wasm_new_root_buffer(e, o) {
    if (e <= 0) throw new Error("capacity >= 1");
    const t = 4 * (e |= 0),
      n = Module._malloc(t);
    if (n % 4 !== 0) throw new Error("Malloc returned an unaligned offset");
    return _zero_region(n, t), new WasmRootBuffer(n, e, true, o);
  }
  function mono_wasm_new_external_root(e) {
    let o;
    if (!e) throw new Error("address must be a location in the native heap");
    return (
      _external_root_free_instances.length > 0
        ? ((o = _external_root_free_instances.pop()), o._set_address(e))
        : (o = new WasmExternalRoot(e)),
      o
    );
  }
  function mono_wasm_new_root(e) {
    let o;
    if (_scratch_root_free_instances.length > 0)
      o = _scratch_root_free_instances.pop();
    else {
      const e = _mono_wasm_claim_scratch_index(),
        t = undefined;
      o = new WasmJsOwnedRoot(_scratch_root_buffer, e);
    }
    if (void 0 !== e) {
      if ("number" !== typeof e)
        throw new Error("value must be an address in the managed heap");
      o.set(e);
    } else o.set(0);
    return o;
  }
  function mono_wasm_release_roots(...e) {
    for (let o = 0; o < e.length; o++) is_nullish(e[o]) || e[o].release();
  }
  function _mono_wasm_release_scratch_index(e) {
    void 0 !== e &&
      (_scratch_root_buffer.set(e, 0),
      (_scratch_root_free_indices[_scratch_root_free_indices_count] = e),
      _scratch_root_free_indices_count++);
  }
  function _mono_wasm_claim_scratch_index() {
    if (is_nullish(_scratch_root_buffer) || !_scratch_root_free_indices) {
      (_scratch_root_buffer = mono_wasm_new_root_buffer(
        maxScratchRoots,
        "js roots"
      )),
        (_scratch_root_free_indices = new Int32Array(maxScratchRoots)),
        (_scratch_root_free_indices_count = maxScratchRoots);
      for (let e = 0; e < maxScratchRoots; e++)
        _scratch_root_free_indices[e] = maxScratchRoots - e - 1;
    }
    if (_scratch_root_free_indices_count < 1)
      throw new Error("Out of scratch root space");
    const e = _scratch_root_free_indices[_scratch_root_free_indices_count - 1];
    return _scratch_root_free_indices_count--, e;
  }
  class WasmRootBuffer {
    constructor(e, o, t, n) {
      const r = 4 * o;
      (this.__offset = e),
        (this.__offset32 = e >>> 2),
        (this.__count = o),
        (this.length = o),
        (this.__handle = wrapped_c_functions.mono_wasm_register_root(
          e,
          r,
          n || "noname"
        )),
        (this.__ownsAllocation = t);
    }
    _throw_index_out_of_range() {
      throw new Error("index out of range");
    }
    _check_in_range(e) {
      (e >= this.__count || e < 0) && this._throw_index_out_of_range();
    }
    get_address(e) {
      return this._check_in_range(e), this.__offset + 4 * e;
    }
    get_address_32(e) {
      return this._check_in_range(e), this.__offset32 + e;
    }
    get(e) {
      this._check_in_range(e);
      const o = this.get_address_32(e);
      return Module.HEAPU32[o];
    }
    set(e, o) {
      const t = this.get_address(e);
      return (
        wrapped_c_functions.mono_wasm_write_managed_pointer_unsafe(t, o), o
      );
    }
    copy_value_from_address(e, o) {
      const t = this.get_address(e);
      wrapped_c_functions.mono_wasm_copy_managed_pointer(t, o);
    }
    _unsafe_get(e) {
      return Module.HEAPU32[this.__offset32 + e];
    }
    _unsafe_set(e, o) {
      const t = this.__offset + e;
      wrapped_c_functions.mono_wasm_write_managed_pointer_unsafe(t, o);
    }
    clear() {
      this.__offset && _zero_region(this.__offset, 4 * this.__count);
    }
    release() {
      this.__offset &&
        this.__ownsAllocation &&
        (wrapped_c_functions.mono_wasm_deregister_root(this.__offset),
        _zero_region(this.__offset, 4 * this.__count),
        Module._free(this.__offset)),
        (this.__handle = this.__offset = this.__count = this.__offset32 = 0);
    }
    toString() {
      return `[root buffer @${this.get_address(0)}, size ${this.__count} ]`;
    }
  }
  class WasmJsOwnedRoot {
    constructor(e, o) {
      (this.__buffer = e), (this.__index = o);
    }
    get_address() {
      return this.__buffer.get_address(this.__index);
    }
    get_address_32() {
      return this.__buffer.get_address_32(this.__index);
    }
    get address() {
      return this.__buffer.get_address(this.__index);
    }
    get() {
      const e = undefined;
      return this.__buffer._unsafe_get(this.__index);
    }
    set(e) {
      const o = this.__buffer.get_address(this.__index);
      return (
        wrapped_c_functions.mono_wasm_write_managed_pointer_unsafe(o, e), e
      );
    }
    copy_from(e) {
      const o = e.address,
        t = this.address;
      wrapped_c_functions.mono_wasm_copy_managed_pointer(t, o);
    }
    copy_to(e) {
      const o = this.address,
        t = e.address;
      wrapped_c_functions.mono_wasm_copy_managed_pointer(t, o);
    }
    copy_from_address(e) {
      const o = this.address;
      wrapped_c_functions.mono_wasm_copy_managed_pointer(o, e);
    }
    copy_to_address(e) {
      const o = this.address;
      wrapped_c_functions.mono_wasm_copy_managed_pointer(e, o);
    }
    get value() {
      return this.get();
    }
    set value(e) {
      this.set(e);
    }
    valueOf() {
      throw new Error(
        "Implicit conversion of roots to pointers is no longer supported. Use .value or .address as appropriate"
      );
    }
    clear() {
      this.set(0);
    }
    release() {
      if (!this.__buffer) throw new Error("No buffer");
      const e = 128;
      _scratch_root_free_instances.length > e
        ? (_mono_wasm_release_scratch_index(this.__index),
          (this.__buffer = null),
          (this.__index = 0))
        : (this.set(0), _scratch_root_free_instances.push(this));
    }
    toString() {
      return `[root @${this.address}]`;
    }
  }
  class WasmExternalRoot {
    constructor(e) {
      (this.__external_address = MonoObjectRefNull),
        (this.__external_address_32 = 0),
        this._set_address(e);
    }
    _set_address(e) {
      (this.__external_address = e), (this.__external_address_32 = e >>> 2);
    }
    get address() {
      return this.__external_address;
    }
    get_address() {
      return this.__external_address;
    }
    get_address_32() {
      return this.__external_address_32;
    }
    get() {
      const e = undefined;
      return Module.HEAPU32[this.__external_address_32];
    }
    set(e) {
      return (
        wrapped_c_functions.mono_wasm_write_managed_pointer_unsafe(
          this.__external_address,
          e
        ),
        e
      );
    }
    copy_from(e) {
      const o = e.address,
        t = this.__external_address;
      wrapped_c_functions.mono_wasm_copy_managed_pointer(t, o);
    }
    copy_to(e) {
      const o = this.__external_address,
        t = e.address;
      wrapped_c_functions.mono_wasm_copy_managed_pointer(t, o);
    }
    copy_from_address(e) {
      const o = this.__external_address;
      wrapped_c_functions.mono_wasm_copy_managed_pointer(o, e);
    }
    copy_to_address(e) {
      const o = this.__external_address;
      wrapped_c_functions.mono_wasm_copy_managed_pointer(e, o);
    }
    get value() {
      return this.get();
    }
    set value(e) {
      this.set(e);
    }
    valueOf() {
      throw new Error(
        "Implicit conversion of roots to pointers is no longer supported. Use .value or .address as appropriate"
      );
    }
    clear() {
      this.set(0);
    }
    release() {
      const e = 128;
      _external_root_free_instances.length < e &&
        _external_root_free_instances.push(this);
    }
    toString() {
      return `[external root @${this.address}]`;
    }
  }
  function toBase64StringImpl(e, o, t) {
    const n = _makeByteReader(e, o, t);
    let r = "",
      _ = 0,
      s = 0,
      a = 0,
      i = 0,
      c = 0,
      l = 0;
    const u = 16777215,
      m = 262143,
      d = 4095,
      f = 63,
      w = 18,
      p = 12,
      g = 6,
      b = 0;
    for (; (_ = n.read()), (s = n.read()), (a = n.read()), null !== _; )
      null === s && ((s = 0), (c += 1)),
        null === a && ((a = 0), (c += 1)),
        (l = (_ << 16) | (s << 8) | (a << 0)),
        (i = (l & u) >> w),
        (r += _base64Table[i]),
        (i = (l & m) >> p),
        (r += _base64Table[i]),
        c < 2 && ((i = (l & d) >> 6), (r += _base64Table[i])),
        2 === c
          ? (r += "==")
          : 1 === c
          ? (r += "=")
          : ((i = (l & f) >> 0), (r += _base64Table[i]));
    return r;
  }
  const _base64Table = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/",
  ];
  function _makeByteReader(e, o, t) {
    let n = "number" === typeof o ? o : 0,
      r;
    r = "number" === typeof t ? n + t : e.length - n;
    const _ = {
      read: function () {
        if (n >= r) return null;
        const o = e[n];
        return (n += 1), o;
      },
    };
    return (
      Object.defineProperty(_, "eof", {
        get: function () {
          return n >= r;
        },
        configurable: true,
        enumerable: true,
      }),
      _
    );
  }
  const commands_received = new Map(),
    wasm_func_map = new Map();
  commands_received.remove = function (e) {
    const o = this.get(e);
    return this.delete(e), o;
  };
  let _call_function_res_cache = {},
    _next_call_function_res_id = 0,
    _debugger_buffer_len = -1,
    _debugger_buffer;
  const regexes = [];
  function mono_wasm_runtime_ready() {
    if (
      ((runtimeHelpers.mono_wasm_runtime_is_ready = true),
      (_next_call_function_res_id = 0),
      (_call_function_res_cache = {}),
      (_debugger_buffer_len = -1),
      globalThis.dotnetDebugger)
    )
      debugger;
    else
      console.debug(
        "mono_wasm_runtime_ready",
        "fe00e07a-5519-4dfe-b35a-f867dbaf2e28"
      );
    _readSymbolMapFile("dotnet.js.symbols");
  }
  function mono_wasm_fire_debugger_agent_message() {
    debugger;
  }
  function mono_wasm_add_dbg_command_received(e, o, t, n) {
    const r = undefined,
      _ = undefined,
      s = {
        res_ok: e,
        res: {
          id: o,
          value: toBase64StringImpl(new Uint8Array(Module.HEAPU8.buffer, t, n)),
        },
      };
    commands_received.has(o) &&
      console.warn("Addind an id that already exists in commands_received"),
      commands_received.set(o, s);
  }
  function mono_wasm_malloc_and_set_debug_buffer(e) {
    e.length > _debugger_buffer_len &&
      (_debugger_buffer && Module._free(_debugger_buffer),
      (_debugger_buffer_len = Math.max(e.length, _debugger_buffer_len, 256)),
      (_debugger_buffer = Module._malloc(_debugger_buffer_len)));
    const o = atob(e);
    for (let e = 0; e < o.length; e++)
      Module.HEAPU8[_debugger_buffer + e] = o.charCodeAt(e);
  }
  function mono_wasm_send_dbg_command_with_parms(e, o, t, n, r, _, s) {
    mono_wasm_malloc_and_set_debug_buffer(n),
      wrapped_c_functions.mono_wasm_send_dbg_command_with_parms(
        e,
        o,
        t,
        _debugger_buffer,
        r,
        _,
        s.toString()
      );
    const { res_ok: a, res: i } = commands_received.remove(e);
    if (!a)
      throw new Error(
        "Failed on mono_wasm_invoke_method_debugger_agent_with_parms"
      );
    return i;
  }
  function mono_wasm_send_dbg_command(e, o, t, n) {
    mono_wasm_malloc_and_set_debug_buffer(n),
      wrapped_c_functions.mono_wasm_send_dbg_command(
        e,
        o,
        t,
        _debugger_buffer,
        n.length
      );
    const { res_ok: r, res: _ } = commands_received.remove(e);
    if (!r) throw new Error("Failed on mono_wasm_send_dbg_command");
    return _;
  }
  function mono_wasm_get_dbg_command_info() {
    const { res_ok: e, res: o } = commands_received.remove(0);
    if (!e) throw new Error("Failed on mono_wasm_get_dbg_command_info");
    return o;
  }
  function mono_wasm_debugger_resume() {}
  function mono_wasm_detach_debugger() {
    wrapped_c_functions.mono_wasm_set_is_debugger_attached(false);
  }
  function mono_wasm_change_debugger_log_level(e) {
    wrapped_c_functions.mono_wasm_change_debugger_log_level(e);
  }
  function mono_wasm_raise_debug_event(e, o = {}) {
    if ("object" !== typeof e)
      throw new Error(`event must be an object, but got ${JSON.stringify(e)}`);
    if (void 0 === e.eventName)
      throw new Error(
        `event.eventName is a required parameter, in event: ${JSON.stringify(
          e
        )}`
      );
    if ("object" !== typeof o)
      throw new Error(`args must be an object, but got ${JSON.stringify(o)}`);
    console.debug(
      "mono_wasm_debug_event_raised:aef14bca-5519-4dfe-b35a-f867abc123ae",
      JSON.stringify(e),
      JSON.stringify(o)
    );
  }
  function mono_wasm_get_loaded_files() {
    return MONO$1.loaded_files;
  }
  function mono_wasm_wait_for_debugger() {
    return new Promise((e) => {
      const o = setInterval(() => {
        1 == runtimeHelpers.wait_for_debugger && (clearInterval(o), e());
      }, 100);
    });
  }
  function mono_wasm_debugger_attached() {
    -1 == runtimeHelpers.wait_for_debugger &&
      (runtimeHelpers.wait_for_debugger = 1),
      wrapped_c_functions.mono_wasm_set_is_debugger_attached(true);
  }
  function mono_wasm_set_entrypoint_breakpoint(e, o) {
    Module.UTF8ToString(e).concat(".dll");
    debugger;
  }
  function _create_proxy_from_object_id(e, o) {
    if (e.startsWith("dotnet:array:")) {
      let e;
      if (void 0 === o.items) return (e = o.map((e) => e.value)), e;
      if (void 0 === o.dimensionsDetails || 1 === o.dimensionsDetails.length)
        return (e = o.items.map((e) => e.value)), e;
    }
    const t = {};
    return (
      Object.keys(o).forEach((e) => {
        const n = o[e];
        void 0 !== n.get
          ? Object.defineProperty(t, n.name, {
              get() {
                return mono_wasm_send_dbg_command(
                  n.get.id,
                  n.get.commandSet,
                  n.get.command,
                  n.get.buffer
                );
              },
              set: function (e) {
                return (
                  mono_wasm_send_dbg_command_with_parms(
                    n.set.id,
                    n.set.commandSet,
                    n.set.command,
                    n.set.buffer,
                    n.set.length,
                    n.set.valtype,
                    e
                  ),
                  true
                );
              },
            })
          : void 0 !== n.set
          ? Object.defineProperty(t, n.name, {
              get() {
                return n.value;
              },
              set: function (e) {
                return (
                  mono_wasm_send_dbg_command_with_parms(
                    n.set.id,
                    n.set.commandSet,
                    n.set.command,
                    n.set.buffer,
                    n.set.length,
                    n.set.valtype,
                    e
                  ),
                  true
                );
              },
            })
          : (t[n.name] = n.value);
      }),
      t
    );
  }
  function mono_wasm_call_function_on(e) {
    if (void 0 != e.arguments && !Array.isArray(e.arguments))
      throw new Error(`"arguments" should be an array, but was ${e.arguments}`);
    const o = e.objectId,
      t = e.details;
    let n = {};
    if (o.startsWith("dotnet:cfo_res:")) {
      if (!(o in _call_function_res_cache))
        throw new Error(`Unknown object id ${o}`);
      n = _call_function_res_cache[o];
    } else n = _create_proxy_from_object_id(o, t);
    const r =
        void 0 != e.arguments
          ? e.arguments.map((e) => JSON.stringify(e.value))
          : [],
      _ = `const fn = ${e.functionDeclaration}; return fn.apply(proxy, [${r}]);`,
      s = undefined,
      a = new Function("proxy", _)(n);
    if (void 0 === a) return { type: "undefined" };
    if (Object(a) !== a)
      return "object" == typeof a && null == a
        ? { type: typeof a, subtype: `${a}`, value: null }
        : { type: typeof a, description: `${a}`, value: `${a}` };
    if (e.returnByValue && void 0 == a.subtype)
      return { type: "object", value: a };
    if (Object.getPrototypeOf(a) == Array.prototype) {
      const e = _cache_call_function_res(a);
      return {
        type: "object",
        subtype: "array",
        className: "Array",
        description: `Array(${a.length})`,
        objectId: e,
      };
    }
    if (void 0 !== a.value || void 0 !== a.subtype) return a;
    if (a == n)
      return {
        type: "object",
        className: "Object",
        description: "Object",
        objectId: o,
      };
    const i = undefined;
    return {
      type: "object",
      className: "Object",
      description: "Object",
      objectId: _cache_call_function_res(a),
    };
  }
  function _get_cfo_res_details(e, o) {
    if (!(e in _call_function_res_cache))
      throw new Error(`Could not find any object with id ${e}`);
    const t = _call_function_res_cache[e],
      n = Object.getOwnPropertyDescriptors(t);
    o.accessorPropertiesOnly &&
      Object.keys(n).forEach((e) => {
        void 0 === n[e].get && Reflect.deleteProperty(n, e);
      });
    const r = [];
    return (
      Object.keys(n).forEach((e) => {
        let o;
        const t = n[e];
        (o =
          "object" == typeof t.value
            ? Object.assign({ name: e }, t)
            : void 0 !== t.value
            ? {
                name: e,
                value: Object.assign(
                  { type: typeof t.value, description: "" + t.value },
                  t
                ),
              }
            : void 0 !== t.get
            ? {
                name: e,
                get: {
                  className: "Function",
                  description: `get ${e} () {}`,
                  type: "function",
                },
              }
            : {
                name: e,
                value: {
                  type: "symbol",
                  value: "<Unknown>",
                  description: "<Unknown>",
                },
              }),
          r.push(o);
      }),
      { __value_as_json_string__: JSON.stringify(r) }
    );
  }
  function mono_wasm_get_details(e, o = {}) {
    return _get_cfo_res_details(`dotnet:cfo_res:${e}`, o);
  }
  function _cache_call_function_res(e) {
    const o = "dotnet:cfo_res:" + _next_call_function_res_id++;
    return (_call_function_res_cache[o] = e), o;
  }
  function mono_wasm_release_object(e) {
    e in _call_function_res_cache && delete _call_function_res_cache[e];
  }
  function mono_wasm_debugger_log(e, o) {
    const t = Module.UTF8ToString(o);
    if (INTERNAL$1.logging && "function" === typeof INTERNAL$1.logging.debugger)
      return INTERNAL$1.logging.debugger(e, t), void 0;
    console.debug(`Debugger.Debug: ${t}`);
  }
  function _readSymbolMapFile(e) {
    try {
      const o = undefined;
      Module.FS_readFile(e, { flags: "r", encoding: "utf8" })
        .split(/[\r\n]/)
        .forEach((e) => {
          const o = e.split(/:/);
          o.length < 2 ||
            ((o[1] = o.splice(1).join(":")),
            wasm_func_map.set(Number(o[0]), o[1]));
        }),
        console.debug(`Loaded ${wasm_func_map.size} symbols`);
    } catch (o) {
      return (
        44 == o.errno
          ? console.debug(`Could not find symbols file ${e}. Ignoring.`)
          : console.log(`Error loading symbol file ${e}: ${JSON.stringify(o)}`),
        void 0
      );
    }
  }
  function mono_wasm_symbolicate_string(e) {
    try {
      if (0 == wasm_func_map.size) return e;
      const o = e;
      for (let t = 0; t < regexes.length; t++) {
        const n = e.replace(new RegExp(regexes[t], "g"), (e, ...o) => {
          const t = o.find(
            (e) => "object" == typeof e && void 0 !== e.replaceSection
          );
          if (void 0 === t) return e;
          const n = t.funcNum,
            r = t.replaceSection,
            _ = wasm_func_map.get(Number(n));
          return void 0 === _ ? e : e.replace(r, `${_} (${r})`);
        });
        if (n !== o) return n;
      }
      return o;
    } catch (o) {
      return console.debug(`failed to symbolicate: ${o}`), e;
    }
  }
  function mono_wasm_stringify_as_error_with_stack(e) {
    let o = e;
    return (
      e instanceof Error || (o = new Error(e)),
      mono_wasm_symbolicate_string(o.stack)
    );
  }
  function mono_wasm_trace_logger(e, o, t, n, r) {
    const _ = Module.UTF8ToString(t),
      s = !!n,
      a = Module.UTF8ToString(e),
      i = r,
      c = Module.UTF8ToString(o),
      l = `[MONO] ${_}`;
    if (INTERNAL$1.logging && "function" === typeof INTERNAL$1.logging.trace)
      return INTERNAL$1.logging.trace(a, c, l, s, i), void 0;
    switch (c) {
      case "critical":
      case "error":
        console.error(mono_wasm_stringify_as_error_with_stack(l));
        break;
      case "warning":
        console.warn(l);
        break;
      case "message":
        console.log(l);
        break;
      case "info":
        console.info(l);
        break;
      case "debug":
        console.debug(l);
        break;
      default:
        console.log(l);
        break;
    }
  }
  regexes.push(
    /at (?<replaceSection>[^:()]+:wasm-function\[(?<funcNum>\d+)\]:0x[a-fA-F\d]+)((?![^)a-fA-F\d])|$)/
  ),
    regexes.push(
      /(?:WASM \[[\da-zA-Z]+\], (?<replaceSection>function #(?<funcNum>[\d]+) \(''\)))/
    ),
    regexes.push(
      /(?<replaceSection>[a-z]+:\/\/[^ )]*:wasm-function\[(?<funcNum>\d+)\]:0x[a-fA-F\d]+)/
    ),
    regexes.push(
      /(?<replaceSection><[^ >]+>[.:]wasm-function\[(?<funcNum>[0-9]+)\])/
    );
  class GuardedPromise extends Promise {
    constructor(e) {
      super((o, t) => {
        let n = false,
          r = false;
        e(
          (e) => {
            if (n) throw new Error("Promise resolved more than once");
            if (r)
              throw new Error(
                "Can not resolve a Promise after it has been rejected"
              );
            (n = true), o(e);
          },
          (e) => {
            if (n)
              throw new Error(
                "Can not reject a Promise after it has been resolved"
              );
            if (r) throw new Error("Promise rejected more than once");
            (r = true), t(e);
          }
        );
      });
    }
  }
  let num_icu_assets_loaded_successfully = 0;
  function mono_wasm_load_icu_data(e) {
    const o = 1 === wrapped_c_functions.mono_wasm_load_icu_data(e);
    return o && num_icu_assets_loaded_successfully++, o;
  }
  function mono_wasm_get_icudt_name(e) {
    return wrapped_c_functions.mono_wasm_get_icudt_name(e);
  }
  function mono_wasm_globalization_init(e, o) {
    let t = false;
    if (("invariant" === e && (t = true), !t))
      if (num_icu_assets_loaded_successfully > 0)
        o &&
          console.debug(
            "MONO_WASM: ICU data archive(s) loaded, disabling invariant mode"
          );
      else {
        if ("icu" === e) {
          const e =
            "invariant globalization mode is inactive and no ICU data archives were loaded";
          throw (Module.printErr(`MONO_WASM: ERROR: ${e}`), new Error(e));
        }
        o &&
          console.debug(
            "MONO_WASM: ICU data archive(s) not loaded, using invariant globalization mode"
          ),
          (t = true);
      }
    t &&
      wrapped_c_functions.mono_wasm_setenv(
        "DOTNET_SYSTEM_GLOBALIZATION_INVARIANT",
        "1"
      ),
      wrapped_c_functions.mono_wasm_setenv(
        "DOTNET_SYSTEM_GLOBALIZATION_PREDEFINED_CULTURES_ONLY",
        "1"
      );
  }
  function mono_wasm_init_aot_profiler(e) {
    null == e && (e = {}),
      "write_at" in e || (e.write_at = "Interop/Runtime::StopProfile"),
      "send_to" in e || (e.send_to = "Interop/Runtime::DumpAotProfileData");
    const o =
      "aot:write-at-method=" + e.write_at + ",send-to-method=" + e.send_to;
    Module.ccall("mono_wasm_load_profiler_aot", null, ["string"], [o]);
  }
  function mono_wasm_init_coverage_profiler(e) {
    null == e && (e = {}),
      "write_at" in e || (e.write_at = "WebAssembly.Runtime::StopProfile"),
      "send_to" in e ||
        (e.send_to = "WebAssembly.Runtime::DumpCoverageProfileData");
    const o =
      "coverage:write-at-method=" + e.write_at + ",send-to-method=" + e.send_to;
    Module.ccall("mono_wasm_load_profiler_coverage", null, ["string"], [o]);
  }
  const fn_signatures = [
      [
        "_get_cs_owned_object_by_js_handle_ref",
        "GetCSOwnedObjectByJSHandleRef",
        "iim",
      ],
      [
        "_get_cs_owned_object_js_handle_ref",
        "GetCSOwnedObjectJSHandleRef",
        "mi",
      ],
      [
        "_try_get_cs_owned_object_js_handle_ref",
        "TryGetCSOwnedObjectJSHandleRef",
        "mi",
      ],
      ["_create_cs_owned_proxy_ref", "CreateCSOwnedProxyRef", "iiim"],
      [
        "_get_js_owned_object_by_gc_handle_ref",
        "GetJSOwnedObjectByGCHandleRef",
        "im",
      ],
      [
        "_get_js_owned_object_gc_handle_ref",
        "GetJSOwnedObjectGCHandleRef",
        "m",
      ],
      [
        "_release_js_owned_object_by_gc_handle",
        "ReleaseJSOwnedObjectByGCHandle",
        "i",
      ],
      ["_create_tcs", "CreateTaskSource", ""],
      ["_set_tcs_result_ref", "SetTaskSourceResultRef", "iR"],
      ["_set_tcs_failure", "SetTaskSourceFailure", "is"],
      ["_get_tcs_task_ref", "GetTaskSourceTaskRef", "im"],
      ["_task_from_result_ref", "TaskFromResultRef", "Rm"],
      ["_setup_js_cont_ref", "SetupJSContinuationRef", "mo"],
      ["_object_to_string_ref", "ObjectToStringRef", "m"],
      ["_get_date_value_ref", "GetDateValueRef", "m"],
      ["_create_date_time_ref", "CreateDateTimeRef", "dm"],
      ["_create_uri_ref", "CreateUriRef", "sm"],
      ["_is_simple_array_ref", "IsSimpleArrayRef", "m"],
    ],
    wrapped_cs_functions = {};
  for (const e of fn_signatures) {
    const o = wrapped_cs_functions;
    o[e[0]] = function (...t) {
      const n = runtimeHelpers.bind_runtime_method(e[1], e[2]);
      return (o[e[0]] = n), n(...t);
    };
  }
  const _use_weak_ref = "function" === typeof globalThis.WeakRef;
  function create_weak_ref(e) {
    return _use_weak_ref ? new WeakRef(e) : { deref: () => e };
  }
  const _use_finalization_registry =
    "function" === typeof globalThis.FinalizationRegistry;
  let _js_owned_object_registry;
  const _cs_owned_objects_by_js_handle = [],
    _js_handle_free_list = [];
  let _next_js_handle = 1;
  const _js_owned_object_table = new Map();
  _use_finalization_registry &&
    (_js_owned_object_registry = new globalThis.FinalizationRegistry(
      _js_owned_object_finalized
    ));
  const js_owned_gc_handle_symbol = Symbol.for("wasm js_owned_gc_handle"),
    cs_owned_js_handle_symbol = Symbol.for("wasm cs_owned_js_handle");
  function get_js_owned_object_by_gc_handle_ref(e, o) {
    if (!e) return setI32_unchecked(o, 0), void 0;
    wrapped_cs_functions._get_js_owned_object_by_gc_handle_ref(e, o);
  }
  function mono_wasm_get_jsobj_from_js_handle(e) {
    return e !== JSHandleNull && e !== JSHandleDisposed
      ? _cs_owned_objects_by_js_handle[e]
      : null;
  }
  function get_cs_owned_object_by_js_handle_ref(e, o, t) {
    if (e === JSHandleNull || e === JSHandleDisposed)
      return setI32_unchecked(t, 0), void 0;
    wrapped_cs_functions._get_cs_owned_object_by_js_handle_ref(e, o ? 1 : 0, t);
  }
  function get_js_obj(e) {
    return e !== JSHandleNull && e !== JSHandleDisposed
      ? mono_wasm_get_jsobj_from_js_handle(e)
      : null;
  }
  function _js_owned_object_finalized(e) {
    _js_owned_object_table.delete(e) &&
      wrapped_cs_functions._release_js_owned_object_by_gc_handle(e);
  }
  function _lookup_js_owned_object(e) {
    if (!e) return null;
    const o = _js_owned_object_table.get(e);
    return o ? o.deref() : null;
  }
  function _register_js_owned_object(e, o) {
    const t = create_weak_ref(o);
    _js_owned_object_table.set(e, t);
  }
  function mono_wasm_get_js_handle(e) {
    if (e[cs_owned_js_handle_symbol]) return e[cs_owned_js_handle_symbol];
    const o = _js_handle_free_list.length
      ? _js_handle_free_list.pop()
      : _next_js_handle++;
    return (
      (_cs_owned_objects_by_js_handle[o] = e),
      (e[cs_owned_js_handle_symbol] = o),
      o
    );
  }
  function mono_wasm_release_cs_owned_object(e) {
    const o = _cs_owned_objects_by_js_handle[e];
    if ("undefined" !== typeof o && null !== o) {
      if (globalThis === o) return;
      "undefined" !== typeof o[cs_owned_js_handle_symbol] &&
        (o[cs_owned_js_handle_symbol] = void 0),
        (_cs_owned_objects_by_js_handle[e] = void 0),
        _js_handle_free_list.push(e);
    }
  }
  class StringDecoder {
    init_fields() {
      this.mono_wasm_string_decoder_buffer ||
        ((this.mono_text_decoder =
          "undefined" !== typeof TextDecoder
            ? new TextDecoder("utf-16le")
            : null),
        (this.mono_wasm_string_root = mono_wasm_new_root()),
        (this.mono_wasm_string_decoder_buffer = Module._malloc(12)));
    }
    copy(e) {
      if ((this.init_fields(), e === MonoStringNull)) return null;
      this.mono_wasm_string_root.value = e;
      const o = this.copy_root(this.mono_wasm_string_root);
      return (this.mono_wasm_string_root.value = MonoStringNull), o;
    }
    copy_root(e) {
      if ((this.init_fields(), e.value === MonoStringNull)) return null;
      const o = this.mono_wasm_string_decoder_buffer + 0,
        t = this.mono_wasm_string_decoder_buffer + 4,
        n = this.mono_wasm_string_decoder_buffer + 8;
      let r;
      wrapped_c_functions.mono_wasm_string_get_data_ref(e.address, o, t, n);
      const _ = getI32(t),
        s = getI32(o),
        a = getI32(n);
      if (
        (a && (r = interned_string_table.get(e.value)),
        void 0 === r &&
          (_ && s
            ? ((r = this.decode(s, s + _)),
              a && interned_string_table.set(e.value, r))
            : (r = mono_wasm_empty_string)),
        void 0 === r)
      )
        throw new Error(
          `internal error when decoding string at location ${e.value}`
        );
      return r;
    }
    decode(e, o) {
      let t = "";
      if (this.mono_text_decoder) {
        const n =
          "undefined" !== typeof SharedArrayBuffer &&
          Module.HEAPU8.buffer instanceof SharedArrayBuffer
            ? Module.HEAPU8.slice(e, o)
            : Module.HEAPU8.subarray(e, o);
        t = this.mono_text_decoder.decode(n);
      } else
        for (let n = 0; n < o - e; n += 2) {
          const o = Module.getValue(e + n, "i16");
          t += String.fromCharCode(o);
        }
      return t;
    }
  }
  const interned_string_table = new Map(),
    interned_js_string_table = new Map();
  let _empty_string_ptr = 0,
    _interned_string_current_root_buffer = null,
    _interned_string_current_root_buffer_count = 0;
  const string_decoder = new StringDecoder(),
    mono_wasm_empty_string = "";
  function conv_string(e) {
    return string_decoder.copy(e);
  }
  function conv_string_root(e) {
    return string_decoder.copy_root(e);
  }
  function mono_intern_string(e) {
    if (0 === e.length) return mono_wasm_empty_string;
    const o = js_string_to_mono_string_interned(e),
      t = interned_string_table.get(o);
    if (is_nullish(t))
      throw new Error(
        "internal error: interned_string_table did not contain string after js_string_to_mono_string_interned"
      );
    return t;
  }
  function _store_string_in_intern_table(e, o, t) {
    if (!o.value)
      throw new Error("null pointer passed to _store_string_in_intern_table");
    const n = 8192;
    _interned_string_current_root_buffer_count >= n &&
      (_interned_string_current_root_buffer = null),
      _interned_string_current_root_buffer ||
        ((_interned_string_current_root_buffer = mono_wasm_new_root_buffer(
          n,
          "interned strings"
        )),
        (_interned_string_current_root_buffer_count = 0));
    const r = _interned_string_current_root_buffer,
      _ = _interned_string_current_root_buffer_count++;
    if (
      t &&
      (wrapped_c_functions.mono_wasm_intern_string_ref(o.address), !o.value)
    )
      throw new Error("mono_wasm_intern_string_ref produced a null pointer");
    interned_js_string_table.set(e, o.value),
      interned_string_table.set(o.value, e),
      0 !== e.length || _empty_string_ptr || (_empty_string_ptr = o.value),
      r.copy_value_from_address(_, o.address);
  }
  function js_string_to_mono_string_interned_root(e, o) {
    let t;
    if (
      ("symbol" === typeof e
        ? ((t = e.description),
          "string" !== typeof t && (t = Symbol.keyFor(e)),
          "string" !== typeof t && (t = "<unknown Symbol>"))
        : "string" === typeof e && (t = e),
      "string" !== typeof t)
    )
      throw new Error(
        `Argument to js_string_to_mono_string_interned must be a string but was ${e}`
      );
    if (0 === t.length && _empty_string_ptr)
      return o.set(_empty_string_ptr), void 0;
    const n = interned_js_string_table.get(t);
    if (n) return o.set(n), void 0;
    js_string_to_mono_string_new_root(t, o),
      _store_string_in_intern_table(t, o, true);
  }
  function js_string_to_mono_string_root(e, o) {
    if ((o.clear(), null !== e))
      if ("symbol" === typeof e) js_string_to_mono_string_interned_root(e, o);
      else {
        if ("string" !== typeof e)
          throw new Error("Expected string argument, got " + typeof e);
        if (0 === e.length) js_string_to_mono_string_interned_root(e, o);
        else {
          if (e.length <= 256) {
            const t = interned_js_string_table.get(e);
            if (t) return o.set(t), void 0;
          }
          js_string_to_mono_string_new_root(e, o);
        }
      }
  }
  function js_string_to_mono_string_new_root(e, o) {
    const t = Module._malloc(2 * (e.length + 1)),
      n = (t >>> 1) | 0;
    for (let o = 0; o < e.length; o++) Module.HEAP16[n + o] = e.charCodeAt(o);
    (Module.HEAP16[n + e.length] = 0),
      wrapped_c_functions.mono_wasm_string_from_utf16_ref(
        t,
        e.length,
        o.address
      ),
      Module._free(t);
  }
  function js_string_to_mono_string_interned(e) {
    const o = mono_wasm_new_root();
    try {
      return js_string_to_mono_string_interned_root(e, o), o.value;
    } finally {
      o.release();
    }
  }
  function js_string_to_mono_string(e) {
    const o = mono_wasm_new_root();
    try {
      return js_string_to_mono_string_root(e, o), o.value;
    } finally {
      o.release();
    }
  }
  const _are_promises_supported =
      ("object" === typeof Promise || "function" === typeof Promise) &&
      "function" === typeof Promise.resolve,
    promise_control_symbol = Symbol.for("wasm promise_control");
  function isThenable(e) {
    return (
      Promise.resolve(e) === e ||
      (("object" === typeof e || "function" === typeof e) &&
        "function" === typeof e.then)
    );
  }
  function mono_wasm_cancel_promise_ref(e, o, t) {
    const n = mono_wasm_new_external_root(t);
    try {
      const o = mono_wasm_get_jsobj_from_js_handle(e),
        t = undefined;
      o[promise_control_symbol].reject("OperationCanceledException");
    } catch (e) {
      return wrap_error_root(o, e, n), void 0;
    } finally {
      n.release();
    }
  }
  function _create_cancelable_promise(e, o) {
    let t = null;
    const n = new Promise(function (n, r) {
      t = {
        isDone: false,
        resolve: (o) => {
          t.isDone || ((t.isDone = true), n(o), e && e());
        },
        reject: (e) => {
          t.isDone || ((t.isDone = true), r(e), o && o());
        },
      };
    });
    return (n[promise_control_symbol] = t), { promise: n, promise_control: t };
  }
  function _js_to_mono_uri_root(e, o, t) {
    switch (true) {
      case null === o:
      case "undefined" === typeof o:
        return t.clear(), void 0;
      case "symbol" === typeof o:
      case "string" === typeof o:
        return wrapped_cs_functions._create_uri_ref(o, t.address), void 0;
      default:
        return _extract_mono_obj_root(e, o, t), void 0;
    }
  }
  function js_to_mono_obj(e) {
    const o = mono_wasm_new_root();
    try {
      return js_to_mono_obj_root(e, o, false), o.value;
    } finally {
      o.release();
    }
  }
  function js_to_mono_obj_root(e, o, t) {
    if (is_nullish(o)) throw new Error("Expected (value, WasmRoot, boolean)");
    switch (true) {
      case null === e:
      case "undefined" === typeof e:
        return o.clear(), void 0;
      case "number" === typeof e: {
        let t;
        return (
          (0 | e) === e
            ? (setI32_unchecked(runtimeHelpers._box_buffer, e),
              (t = runtimeHelpers._class_int32))
            : e >>> 0 === e
            ? (setU32_unchecked(runtimeHelpers._box_buffer, e),
              (t = runtimeHelpers._class_uint32))
            : (setF64(runtimeHelpers._box_buffer, e),
              (t = runtimeHelpers._class_double)),
          wrapped_c_functions.mono_wasm_box_primitive_ref(
            t,
            runtimeHelpers._box_buffer,
            8,
            o.address
          ),
          void 0
        );
      }
      case "string" === typeof e:
        return js_string_to_mono_string_root(e, o), void 0;
      case "symbol" === typeof e:
        return js_string_to_mono_string_interned_root(e, o), void 0;
      case "boolean" === typeof e:
        return (
          setB32(runtimeHelpers._box_buffer, e),
          wrapped_c_functions.mono_wasm_box_primitive_ref(
            runtimeHelpers._class_boolean,
            runtimeHelpers._box_buffer,
            4,
            o.address
          ),
          void 0
        );
      case true === isThenable(e):
        return _wrap_js_thenable_as_task_root(e, o), void 0;
      case "Date" === e.constructor.name:
        return (
          wrapped_cs_functions._create_date_time_ref(e.getTime(), o.address),
          void 0
        );
      default:
        return _extract_mono_obj_root(t, e, o), void 0;
    }
  }
  function _extract_mono_obj_root(e, o, t) {
    if ((t.clear(), null !== o && "undefined" !== typeof o)) {
      if (o[js_owned_gc_handle_symbol])
        return (
          get_js_owned_object_by_gc_handle_ref(
            o[js_owned_gc_handle_symbol],
            t.address
          ),
          void 0
        );
      if (
        (o[cs_owned_js_handle_symbol] &&
          (get_cs_owned_object_by_js_handle_ref(
            o[cs_owned_js_handle_symbol],
            e,
            t.address
          ),
          t.value || delete o[cs_owned_js_handle_symbol]),
        !t.value)
      ) {
        const n = o[wasm_type_symbol],
          r = "undefined" === typeof n ? 0 : n,
          _ = mono_wasm_get_js_handle(o);
        wrapped_cs_functions._create_cs_owned_proxy_ref(
          _,
          r,
          e ? 1 : 0,
          t.address
        );
      }
    }
  }
  function js_typedarray_to_heap(e) {
    const o = e.length * e.BYTES_PER_ELEMENT,
      t = Module._malloc(o),
      n = new Uint8Array(Module.HEAPU8.buffer, t, o);
    return n.set(new Uint8Array(e.buffer, e.byteOffset, o)), n;
  }
  function js_typed_array_to_array_root(e, o) {
    if (!has_backing_array_buffer(e) || !e.BYTES_PER_ELEMENT)
      throw new Error("Object '" + e + "' is not a typed array");
    {
      const t = e[wasm_type_symbol],
        n = js_typedarray_to_heap(e);
      wrapped_c_functions.mono_wasm_typed_array_new_ref(
        n.byteOffset,
        e.length,
        e.BYTES_PER_ELEMENT,
        t,
        o.address
      ),
        Module._free(n.byteOffset);
    }
  }
  function js_typed_array_to_array(e) {
    const o = mono_wasm_new_root();
    try {
      return js_typed_array_to_array_root(e, o), o.value;
    } finally {
      o.release();
    }
  }
  function js_to_mono_enum(e, o, t) {
    if ("number" !== typeof e)
      throw new Error(`Expected numeric value for enum argument, got '${e}'`);
    return 0 | e;
  }
  function js_array_to_mono_array(e, o, t) {
    const n = mono_wasm_new_root();
    o
      ? wrapped_c_functions.mono_wasm_string_array_new_ref(e.length, n.address)
      : wrapped_c_functions.mono_wasm_obj_array_new_ref(e.length, n.address);
    const r = mono_wasm_new_root(MonoObjectNull),
      _ = n.address,
      s = r.address;
    try {
      for (let n = 0; n < e.length; ++n) {
        let a = e[n];
        o && (a = a.toString()),
          js_to_mono_obj_root(a, r, t),
          wrapped_c_functions.mono_wasm_obj_array_set_ref(_, n, s);
      }
      return n.value;
    } finally {
      mono_wasm_release_roots(n, r);
    }
  }
  function _wrap_js_thenable_as_task_root(e, o) {
    if (!e) return o.clear(), null;
    const t = mono_wasm_get_js_handle(e),
      n = wrapped_cs_functions._create_tcs();
    return (
      e.then(
        (e) => {
          wrapped_cs_functions._set_tcs_result_ref(n, e),
            mono_wasm_release_cs_owned_object(t),
            _use_finalization_registry ||
              wrapped_cs_functions._release_js_owned_object_by_gc_handle(n);
        },
        (e) => {
          wrapped_cs_functions._set_tcs_failure(n, e ? e.toString() : ""),
            mono_wasm_release_cs_owned_object(t),
            _use_finalization_registry ||
              wrapped_cs_functions._release_js_owned_object_by_gc_handle(n);
        }
      ),
      _use_finalization_registry && _js_owned_object_registry.register(e, n),
      wrapped_cs_functions._get_tcs_task_ref(n, o.address),
      { then_js_handle: t }
    );
  }
  function mono_wasm_typed_array_to_array_ref(e, o, t) {
    const n = mono_wasm_new_external_root(t);
    try {
      const t = mono_wasm_get_jsobj_from_js_handle(e);
      if (is_nullish(t))
        return (
          wrap_error_root(o, "ERR06: Invalid JS object handle '" + e + "'", n),
          void 0
        );
      js_typed_array_to_array_root(t, n);
    } catch (e) {
      wrap_error_root(o, String(e), n);
    } finally {
      n.release();
    }
  }
  const delegate_invoke_symbol = Symbol.for("wasm delegate_invoke"),
    delegate_invoke_signature_symbol = Symbol.for(
      "wasm delegate_invoke_signature"
    );
  function unbox_mono_obj(e) {
    if (e === MonoObjectNull) return;
    const o = mono_wasm_new_root(e);
    try {
      return unbox_mono_obj_root(o);
    } finally {
      o.release();
    }
  }
  function _unbox_cs_owned_root_as_js_object(e) {
    const o = undefined,
      t = undefined;
    return mono_wasm_get_jsobj_from_js_handle(
      wrapped_cs_functions._get_cs_owned_object_js_handle_ref(e.address, 0)
    );
  }
  function _unbox_mono_obj_root_with_known_nonprimitive_type_impl(e, o, t, n) {
    switch (o) {
      case 0:
        return null;
      case 26:
      case 27:
        throw new Error("int64 not available");
      case 3:
      case 29:
        return conv_string_root(e);
      case 4:
        throw new Error("no idea on how to unbox value types");
      case 5:
        return _wrap_delegate_root_as_function(e);
      case 6:
        return _unbox_task_root_as_promise(e);
      case 7:
        return _unbox_ref_type_root_as_js_object(e);
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
        throw new Error("Marshaling of primitive arrays are not supported.");
      case 20:
        return new Date(wrapped_cs_functions._get_date_value_ref(e.address));
      case 21:
        return wrapped_cs_functions._object_to_string_ref(e.address);
      case 22:
        return wrapped_cs_functions._object_to_string_ref(e.address);
      case 23:
        return _unbox_cs_owned_root_as_js_object(e);
      case 30:
        return;
      default:
        throw new Error(
          `no idea on how to unbox object of MarshalType ${o} at offset ${e.value} (root address is ${e.address})`
        );
    }
  }
  function _unbox_mono_obj_root_with_known_nonprimitive_type(e, o, t) {
    if (o >= 512)
      throw new Error(
        `Got marshaling error ${o} when attempting to unbox object at address ${e.value} (root located at ${e.address})`
      );
    let n = MonoTypeNull;
    if ((4 === o || 7 == o) && ((n = getU32(t)), n < 1024))
      throw new Error(
        `Got invalid MonoType ${n} for object at address ${e.value} (root located at ${e.address})`
      );
    return _unbox_mono_obj_root_with_known_nonprimitive_type_impl(e, o, n);
  }
  function unbox_mono_obj_root(e) {
    if (0 === e.value) return;
    const o = runtimeHelpers._unbox_buffer,
      t = wrapped_c_functions.mono_wasm_try_unbox_primitive_and_get_type_ref(
        e.address,
        o,
        runtimeHelpers._unbox_buffer_size
      );
    switch (t) {
      case 1:
        return getI32(o);
      case 25:
        return getU32(o);
      case 32:
        return getU32(o);
      case 24:
        return getF32(o);
      case 2:
        return getF64(o);
      case 8:
        return 0 !== getI32(o);
      case 28:
        return String.fromCharCode(getI32(o));
      case 0:
        return null;
      default:
        return _unbox_mono_obj_root_with_known_nonprimitive_type(e, t, o);
    }
  }
  function mono_array_to_js_array(e) {
    if (e === MonoArrayNull) return null;
    const o = mono_wasm_new_root(e);
    try {
      return mono_array_root_to_js_array(o);
    } finally {
      o.release();
    }
  }
  function is_nested_array_ref(e) {
    return wrapped_cs_functions._is_simple_array_ref(e.address);
  }
  function mono_array_root_to_js_array(e) {
    if (e.value === MonoArrayNull) return null;
    const o = e.address,
      t = mono_wasm_new_root(),
      n = t.address;
    try {
      const r = wrapped_c_functions.mono_wasm_array_length(e.value),
        _ = new Array(r);
      for (let e = 0; e < r; ++e)
        wrapped_c_functions.mono_wasm_array_get_ref(o, e, n),
          is_nested_array_ref(t)
            ? (_[e] = mono_array_root_to_js_array(t))
            : (_[e] = unbox_mono_obj_root(t));
      return _;
    } finally {
      t.release();
    }
  }
  function _wrap_delegate_root_as_function(e) {
    if (e.value === MonoObjectNull) return null;
    const o = undefined;
    return _wrap_delegate_gc_handle_as_function(
      wrapped_cs_functions._get_js_owned_object_gc_handle_ref(e.address)
    );
  }
  function _wrap_delegate_gc_handle_as_function(e, o) {
    let t = _lookup_js_owned_object(e);
    if (!t) {
      t = function (...n) {
        const r = mono_wasm_new_root();
        get_js_owned_object_by_gc_handle_ref(e, r.address);
        try {
          const e = call_method_ref(
            t[delegate_invoke_symbol],
            r,
            t[delegate_invoke_signature_symbol],
            n
          );
          return o && o(), e;
        } finally {
          r.release();
        }
      };
      const n = mono_wasm_new_root();
      get_js_owned_object_by_gc_handle_ref(e, n.address);
      try {
        if (
          "undefined" === typeof t[delegate_invoke_symbol] &&
          ((t[delegate_invoke_symbol] =
            wrapped_c_functions.mono_wasm_get_delegate_invoke_ref(n.address)),
          !t[delegate_invoke_symbol])
        )
          throw new Error("System.Delegate Invoke method can not be resolved.");
        "undefined" === typeof t[delegate_invoke_signature_symbol] &&
          (t[delegate_invoke_signature_symbol] =
            mono_method_get_call_signature_ref(t[delegate_invoke_symbol], n));
      } finally {
        n.release();
      }
      _use_finalization_registry && _js_owned_object_registry.register(t, e),
        _register_js_owned_object(e, t);
    }
    return t;
  }
  function mono_wasm_create_cs_owned_object_ref(e, o, t, n) {
    const r = mono_wasm_new_external_root(o),
      _ = mono_wasm_new_external_root(e),
      s = mono_wasm_new_external_root(n);
    try {
      const e = conv_string_root(_);
      if (!e) return wrap_error_root(t, "Invalid name @" + _.value, s), void 0;
      const o = globalThis[e];
      if (null === o || "undefined" === typeof o)
        return (
          wrap_error_root(
            t,
            "JavaScript host object '" + e + "' not found.",
            s
          ),
          void 0
        );
      try {
        const e = mono_array_root_to_js_array(r),
          t = function (e, o) {
            let t = [];
            (t[0] = e), o && (t = t.concat(o));
            const n = undefined,
              r = undefined;
            return new (e.bind.apply(e, t))();
          },
          n = t(o, e),
          _ = undefined;
        js_to_mono_obj_root(mono_wasm_get_js_handle(n), s, false);
      } catch (e) {
        return wrap_error_root(t, e, s), void 0;
      }
    } finally {
      s.release(), r.release(), _.release();
    }
  }
  function _unbox_task_root_as_promise(e) {
    if (e.value === MonoObjectNull) return null;
    if (!_are_promises_supported)
      throw new Error(
        "Promises are not supported thus 'System.Threading.Tasks.Task' can not work in this context."
      );
    const o = wrapped_cs_functions._get_js_owned_object_gc_handle_ref(
      e.address
    );
    let t = _lookup_js_owned_object(o);
    if (!t) {
      const n = _use_finalization_registry
          ? void 0
          : () => _js_owned_object_finalized(o),
        { promise: r, promise_control: _ } = _create_cancelable_promise(n, n);
      (t = r),
        wrapped_cs_functions._setup_js_cont_ref(e.address, _),
        _use_finalization_registry && _js_owned_object_registry.register(t, o),
        _register_js_owned_object(o, t);
    }
    return t;
  }
  function _unbox_ref_type_root_as_js_object(e) {
    if (e.value === MonoObjectNull) return null;
    const o = wrapped_cs_functions._try_get_cs_owned_object_js_handle_ref(
      e.address,
      0
    );
    if (o) {
      if (o === JSHandleDisposed)
        throw new Error("Cannot access a disposed JSObject at " + e.value);
      return mono_wasm_get_jsobj_from_js_handle(o);
    }
    const t = wrapped_cs_functions._get_js_owned_object_gc_handle_ref(
      e.address
    );
    let n = _lookup_js_owned_object(t);
    return (
      is_nullish(n) &&
        ((n = {}),
        (n[js_owned_gc_handle_symbol] = t),
        _use_finalization_registry && _js_owned_object_registry.register(n, t),
        _register_js_owned_object(t, n)),
      n
    );
  }
  const primitiveConverters = new Map(),
    _signature_converters = new Map();
  function find_method(e, o, t) {
    return wrapped_c_functions.mono_wasm_assembly_find_method(e, o, t);
  }
  function get_method(e) {
    const o = find_method(runtimeHelpers.wasm_runtime_class, e, -1);
    if (!o)
      throw (
        "Can't find method " +
        runtimeHelpers.runtime_namespace +
        "." +
        runtimeHelpers.runtime_classname +
        ":" +
        e
      );
    return o;
  }
  function bind_runtime_method(e, o) {
    const t = undefined;
    return mono_bind_method(get_method(e), null, o, "BINDINGS_" + e);
  }
  function _create_named_function(e, o, t, n) {
    let r = null,
      _ = null,
      s = null;
    if (n) {
      (s = Object.keys(n)), (_ = new Array(s.length));
      for (let e = 0, o = s.length; e < o; e++) _[e] = n[s[e]];
    }
    const a = undefined;
    return (
      (r = _create_rebindable_named_function(e, o, t, s).apply(null, _)), r
    );
  }
  function _create_rebindable_named_function(e, o, t, n) {
    const r = '"use strict";\r\n';
    let _ = "",
      s = "";
    e
      ? ((_ = "//# sourceURL=https://mono-wasm.invalid/" + e + "\r\n"), (s = e))
      : (s = "unnamed");
    let a = "function " + s + "(" + o.join(", ") + ") {\r\n" + t + "\r\n};\r\n";
    const i = /\r(\n?)/g;
    a = _ + r + a.replace(i, "\r\n    ") + `    return ${s};\r\n`;
    let c = null,
      l = null;
    return (l = n ? n.concat([a]) : [a]), (c = Function.apply(Function, l)), c;
  }
  function _create_primitive_converters() {
    const e = primitiveConverters;
    e.set("m", { steps: [{}], size: 0 }),
      e.set("s", {
        steps: [
          { convert_root: js_string_to_mono_string_root.bind(BINDING$1) },
        ],
        size: 0,
        needs_root: true,
      }),
      e.set("S", {
        steps: [
          {
            convert_root:
              js_string_to_mono_string_interned_root.bind(BINDING$1),
          },
        ],
        size: 0,
        needs_root: true,
      }),
      e.set("o", {
        steps: [{ convert_root: js_to_mono_obj_root.bind(BINDING$1) }],
        size: 0,
        needs_root: true,
      }),
      e.set("u", {
        steps: [{ convert_root: _js_to_mono_uri_root.bind(BINDING$1, false) }],
        size: 0,
        needs_root: true,
      }),
      e.set("R", {
        steps: [
          { convert_root: js_to_mono_obj_root.bind(BINDING$1), byref: true },
        ],
        size: 0,
        needs_root: true,
      }),
      e.set("j", {
        steps: [{ convert: js_to_mono_enum.bind(BINDING$1), indirect: "i32" }],
        size: 8,
      }),
      e.set("b", { steps: [{ indirect: "bool" }], size: 8 }),
      e.set("i", { steps: [{ indirect: "i32" }], size: 8 }),
      e.set("I", { steps: [{ indirect: "u32" }], size: 8 }),
      e.set("l", { steps: [{ indirect: "i52" }], size: 8 }),
      e.set("L", { steps: [{ indirect: "u52" }], size: 8 }),
      e.set("f", { steps: [{ indirect: "float" }], size: 8 }),
      e.set("d", { steps: [{ indirect: "double" }], size: 8 });
  }
  function _create_converter_for_marshal_string(e) {
    const o = [];
    let t = 0,
      n = false,
      r = false,
      _ = -1,
      s = false;
    for (let a = 0; a < e.length; ++a) {
      const i = e[a];
      if (a === e.length - 1) {
        if ("!" === i) {
          n = true;
          continue;
        }
        "m" === i && ((r = true), (_ = e.length - 1));
      } else if ("!" === i)
        throw new Error("! must be at the end of the signature");
      const c = primitiveConverters.get(i);
      if (!c) throw new Error("Unknown parameter type " + i);
      const l = Object.create(c.steps[0]);
      (l.size = c.size),
        c.needs_root && (s = true),
        (l.needs_root = c.needs_root),
        (l.key = i),
        o.push(l),
        (t += c.size);
    }
    return {
      steps: o,
      size: t,
      args_marshal: e,
      is_result_definitely_unmarshaled: n,
      is_result_possibly_unmarshaled: r,
      result_unmarshaled_if_argc: _,
      needs_root_buffer: s,
    };
  }
  function _get_converter_for_marshal_string(e) {
    let o = _signature_converters.get(e);
    return (
      o ||
        ((o = _create_converter_for_marshal_string(e)),
        _signature_converters.set(e, o)),
      o
    );
  }
  function _compile_converter_for_marshal_string(e) {
    const o = _get_converter_for_marshal_string(e);
    if ("string" !== typeof o.args_marshal)
      throw new Error("Corrupt converter for '" + e + "'");
    if (o.compiled_function && o.compiled_variadic_function) return o;
    const t = e.replace("!", "_result_unmarshaled");
    o.name = t;
    let n = [],
      r = ["method"];
    const _ = {
      Module: Module,
      setI32: setI32,
      setU32: setU32,
      setF32: setF32,
      setF64: setF64,
      setU52: setU52,
      setI52: setI52,
      setB32: setB32,
      setI32_unchecked: setI32_unchecked,
      setU32_unchecked: setU32_unchecked,
      scratchValueRoot: o.scratchValueRoot,
      stackAlloc: Module.stackAlloc,
      _zero_region: _zero_region,
    };
    let s = 0;
    const a = 8 * (((4 * e.length + 7) / 8) | 0),
      i = o.size + 4 * e.length + 16;
    n.push(
      "if (!method) throw new Error('no method provided');",
      `const buffer = stackAlloc(${i});`,
      `_zero_region(buffer, ${i});`,
      `const indirectStart = buffer + ${a};`,
      ""
    );
    for (let e = 0; e < o.steps.length; e++) {
      const t = o.steps[e],
        a = "step" + e,
        i = "value" + e,
        c = "arg" + e,
        l = `(indirectStart + ${s})`;
      if ((r.push(c), t.convert_root)) {
        if (!!t.indirect)
          throw new Error(
            "Assert failed: converter step cannot both be rooted and indirect"
          );
        if (!o.scratchValueRoot) {
          const e = Module.stackSave();
          (o.scratchValueRoot = mono_wasm_new_external_root(e)),
            (_.scratchValueRoot = o.scratchValueRoot);
        }
        (_[a] = t.convert_root),
          n.push(`scratchValueRoot._set_address(${l});`),
          n.push(`${a}(${c}, scratchValueRoot);`),
          t.byref
            ? n.push(`let ${i} = ${l};`)
            : n.push(`let ${i} = scratchValueRoot.value;`);
      } else
        t.convert
          ? ((_[a] = t.convert), n.push(`let ${i} = ${a}(${c}, method, ${e});`))
          : n.push(`let ${i} = ${c};`);
      if (
        (t.needs_root &&
          !t.convert_root &&
          (n.push(
            "if (!rootBuffer) throw new Error('no root buffer provided');"
          ),
          n.push(`rootBuffer.set (${e}, ${i});`)),
        t.indirect)
      ) {
        switch (t.indirect) {
          case "bool":
            n.push(`setB32(${l}, ${i});`);
            break;
          case "u32":
            n.push(`setU32(${l}, ${i});`);
            break;
          case "i32":
            n.push(`setI32(${l}, ${i});`);
            break;
          case "float":
            n.push(`setF32(${l}, ${i});`);
            break;
          case "double":
            n.push(`setF64(${l}, ${i});`);
            break;
          case "i52":
            n.push(`setI52(${l}, ${i});`);
            break;
          case "u52":
            n.push(`setU52(${l}, ${i});`);
            break;
          default:
            throw new Error("Unimplemented indirect type: " + t.indirect);
        }
        n.push(`setU32_unchecked(buffer + (${e} * 4), ${l});`), (s += t.size);
      } else n.push(`setU32_unchecked(buffer + (${e} * 4), ${i});`), (s += 4);
      n.push("");
    }
    n.push("return buffer;");
    let c = n.join("\r\n"),
      l = null,
      u = null;
    try {
      (l = _create_named_function("converter_" + t, r, c, _)),
        (o.compiled_function = l);
    } catch (e) {
      throw (
        ((o.compiled_function = null),
        console.warn("compiling converter failed for", c, "with error", e),
        e)
      );
    }
    r = ["method", "args"];
    const m = { converter: l };
    n = ["return converter(", "  method,"];
    for (let e = 0; e < o.steps.length; e++)
      n.push("  args[" + e + (e == o.steps.length - 1 ? "]" : "], "));
    n.push(");"), (c = n.join("\r\n"));
    try {
      (u = _create_named_function("variadic_converter_" + t, r, c, m)),
        (o.compiled_variadic_function = u);
    } catch (e) {
      throw (
        ((o.compiled_variadic_function = null),
        console.warn("compiling converter failed for", c, "with error", e),
        e)
      );
    }
    return (o.scratchRootBuffer = null), (o.scratchBuffer = VoidPtrNull), o;
  }
  function _maybe_produce_signature_warning(e) {
    e.has_warned_about_signature ||
      (console.warn(
        "MONO_WASM: Deprecated raw return value signature: '" +
          e.args_marshal +
          "'. End the signature with '!' instead of 'm'."
      ),
      (e.has_warned_about_signature = true));
  }
  function _decide_if_result_is_marshaled(e, o) {
    if (!e) return true;
    if (
      e.is_result_possibly_unmarshaled &&
      o === e.result_unmarshaled_if_argc
    ) {
      if (o < e.result_unmarshaled_if_argc)
        throw new Error(
          `Expected >= ${e.result_unmarshaled_if_argc} argument(s) but got ${o} for signature '${e.args_marshal}'`
        );
      return _maybe_produce_signature_warning(e), false;
    }
    if (o < e.steps.length)
      throw new Error(
        `Expected ${e.steps.length} argument(s) but got ${o} for signature '${e.args_marshal}'`
      );
    return !e.is_result_definitely_unmarshaled;
  }
  function mono_bind_method(e, o, t, n) {
    if ("string" !== typeof t)
      throw new Error("args_marshal argument invalid, expected string");
    let r = null;
    "string" === typeof t && (r = _compile_converter_for_marshal_string(t));
    const _ = 128,
      s = Module._malloc(_),
      a = {
        friendlyName: n,
        method: e,
        converter: r,
        scratchRootBuffer: null,
        scratchBuffer: VoidPtrNull,
        scratchResultRoot: mono_wasm_new_root(),
        scratchExceptionRoot: mono_wasm_new_root(),
      },
      i = {
        Module: Module,
        mono_wasm_new_root: mono_wasm_new_root,
        _create_temp_frame: _create_temp_frame,
        _handle_exception_for_call: _handle_exception_for_call,
        _teardown_after_call: _teardown_after_call,
        mono_wasm_try_unbox_primitive_and_get_type_ref: wrap_c_function(
          "mono_wasm_try_unbox_primitive_and_get_type_ref"
        ),
        _unbox_mono_obj_root_with_known_nonprimitive_type:
          _unbox_mono_obj_root_with_known_nonprimitive_type,
        invoke_method_ref: wrap_c_function("mono_wasm_invoke_method_ref"),
        method: e,
        token: a,
        unbox_buffer: s,
        unbox_buffer_size: _,
        getB32: getB32,
        getI32: getI32,
        getU32: getU32,
        getF32: getF32,
        getF64: getF64,
        stackSave: Module.stackSave,
      },
      c = r ? "converter_" + r.name : "";
    r && (i[c] = r);
    const l = [],
      u = [
        "_create_temp_frame();",
        "let resultRoot = token.scratchResultRoot, exceptionRoot = token.scratchExceptionRoot, sp = stackSave();",
        "token.scratchResultRoot = null;",
        "token.scratchExceptionRoot = null;",
        "if (resultRoot === null)",
        "\tresultRoot = mono_wasm_new_root ();",
        "if (exceptionRoot === null)",
        "\texceptionRoot = mono_wasm_new_root ();",
        "",
      ];
    if (r) {
      u.push(`let buffer = ${c}.compiled_function(`, "    method,");
      for (let e = 0; e < r.steps.length; e++) {
        const o = "arg" + e;
        l.push(o), u.push("    " + o + (e == r.steps.length - 1 ? "" : ", "));
      }
      u.push(");");
    } else u.push("let buffer = 0;");
    if (
      (r && r.is_result_definitely_unmarshaled
        ? u.push("let is_result_marshaled = false;")
        : r && r.is_result_possibly_unmarshaled
        ? u.push(
            `let is_result_marshaled = arguments.length !== ${r.result_unmarshaled_if_argc};`
          )
        : u.push("let is_result_marshaled = true;"),
      u.push(
        "",
        "invoke_method_ref (method, 0, buffer, exceptionRoot.address, resultRoot.address);",
        `_handle_exception_for_call (${c}, token, buffer, resultRoot, exceptionRoot, sp);`,
        "",
        "let resultPtr = resultRoot.value, result = undefined;"
      ),
      !r)
    )
      throw new Error("No converter");
    if (
      (r.is_result_possibly_unmarshaled && u.push("if (!is_result_marshaled) "),
      (r.is_result_definitely_unmarshaled ||
        r.is_result_possibly_unmarshaled) &&
        u.push("    result = resultPtr;"),
      r.is_result_definitely_unmarshaled ||
        u.push(
          "if (is_result_marshaled) {",
          "    let resultType = mono_wasm_try_unbox_primitive_and_get_type_ref (resultRoot.address, unbox_buffer, unbox_buffer_size);",
          "    switch (resultType) {",
          "    case 1:",
          "        result = getI32(unbox_buffer); break;",
          "    case 32:",
          "    case 25:",
          "        result = getU32(unbox_buffer); break;",
          "    case 24:",
          "        result = getF32(unbox_buffer); break;",
          "    case 2:",
          "        result = getF64(unbox_buffer); break;",
          "    case 8:",
          "        result = getB32(unbox_buffer); break;",
          "    case 28:",
          "        result = String.fromCharCode(getI32(unbox_buffer)); break;",
          "    case 0:",
          "        result = null; break;",
          "    default:",
          "        result = _unbox_mono_obj_root_with_known_nonprimitive_type (resultRoot, resultType, unbox_buffer); break;",
          "    }",
          "}"
        ),
      n)
    ) {
      const e = /[^A-Za-z0-9_$]/g;
      n = n.replace(e, "_");
    }
    let m = n || "clr_" + e;
    o && (m += "_this" + o),
      u.push(
        `_teardown_after_call (${c}, token, buffer, resultRoot, exceptionRoot, sp);`,
        "return result;"
      );
    const d = undefined,
      f = undefined;
    return _create_named_function(m, l, u.join("\r\n"), i);
  }
  function _verify_args_for_method_call(e, o) {
    const t = o && "object" === typeof o && o.length > 0,
      n = "string" === typeof e;
    if (t) {
      if (!n) throw new Error("No signature provided for method call.");
      if (o.length > e.length)
        throw new Error(
          "Too many parameter values. Expected at most " +
            e.length +
            " value(s) for signature " +
            e
        );
    }
    return n && t;
  }
  function _convert_exception_for_method_call(e, o) {
    if (o.value === MonoObjectNull) return null;
    const t = conv_string_root(e),
      n = undefined;
    return new Error(t);
  }
  function call_method_ref(e, o, t, n) {
    let r;
    if (
      ((r =
        "number" === typeof o
          ? o
          : "object" === typeof o
          ? o.address
          : coerceNull(o)),
      "number" !== typeof e)
    )
      throw new Error(
        `method must be an address in the native heap, but was '${e}'`
      );
    if (!e) throw new Error("no method specified");
    if ("number" !== typeof r)
      throw new Error(
        `this_arg must be a root instance, the address of a root, or undefined, but was ${o}`
      );
    const _ = _verify_args_for_method_call(t, n);
    let s = VoidPtrNull,
      a;
    const i = Module.stackSave();
    let c = true;
    return (
      _create_temp_frame(),
      _ &&
        ((a = _compile_converter_for_marshal_string(t)),
        (c = _decide_if_result_is_marshaled(a, n.length)),
        (s = a.compiled_variadic_function(e, n))),
      _call_method_with_converted_args(e, r, a, null, s, c, i)
    );
  }
  function _handle_exception_for_call(e, o, t, n, r, _) {
    const s = _convert_exception_for_method_call(n, r);
    if (s) throw (_teardown_after_call(e, o, t, n, r, _), s);
  }
  function _handle_exception_and_produce_result_for_call(e, o, t, n, r, _, s) {
    let a;
    return (
      _handle_exception_for_call(e, o, t, n, r, _),
      (a = s ? unbox_mono_obj_root(n) : n.value),
      _teardown_after_call(e, o, t, n, r, _),
      a
    );
  }
  function _teardown_after_call(e, o, t, n, r, _) {
    _release_temp_frame(),
      Module.stackRestore(_),
      "object" === typeof n &&
        (n.clear(),
        null !== o && null === o.scratchResultRoot
          ? (o.scratchResultRoot = n)
          : n.release()),
      "object" === typeof r &&
        (r.clear(),
        null !== o && null === o.scratchExceptionRoot
          ? (o.scratchExceptionRoot = r)
          : r.release());
  }
  function _call_method_with_converted_args(e, o, t, n, r, _, s) {
    const a = mono_wasm_new_root(),
      i = mono_wasm_new_root();
    return (
      wrapped_c_functions.mono_wasm_invoke_method_ref(
        e,
        o,
        r,
        i.address,
        a.address
      ),
      _handle_exception_and_produce_result_for_call(t, n, r, a, i, s, _)
    );
  }
  function call_static_method(e, o, t) {
    bindings_lazy_init();
    const n = mono_method_resolve(e);
    return (
      "undefined" === typeof t &&
        (t = mono_method_get_call_signature_ref(n, void 0)),
      call_method_ref(n, void 0, t, o)
    );
  }
  function mono_bind_static_method(e, o) {
    bindings_lazy_init();
    const t = mono_method_resolve(e);
    return (
      "undefined" === typeof o &&
        (o = mono_method_get_call_signature_ref(t, void 0)),
      mono_bind_method(t, null, o, e)
    );
  }
  function mono_bind_assembly_entry_point(e, o) {
    bindings_lazy_init();
    const t = wrapped_c_functions.mono_wasm_assembly_load(e);
    if (!t) throw new Error("Could not find assembly: " + e);
    let n = 0;
    1 == runtimeHelpers.wait_for_debugger && (n = 1);
    const r = wrapped_c_functions.mono_wasm_assembly_get_entry_point(t, n);
    if (!r) throw new Error("Could not find entry point for assembly: " + e);
    return (
      "string" !== typeof o &&
        (o = mono_method_get_call_signature_ref(r, void 0)),
      async function (...e) {
        return (
          e.length > 0 &&
            Array.isArray(e[0]) &&
            (e[0] = js_array_to_mono_array(e[0], true, false)),
          call_method_ref(r, void 0, o, e)
        );
      }
    );
  }
  function mono_call_assembly_entry_point(e, o, t) {
    return o || (o = [[]]), mono_bind_assembly_entry_point(e, t)(...o);
  }
  function mono_wasm_invoke_js_with_args_ref(e, o, t, n, r) {
    const _ = mono_wasm_new_external_root(t),
      s = mono_wasm_new_external_root(o),
      a = mono_wasm_new_external_root(r);
    try {
      const o = conv_string_root(s);
      if (!o || "string" !== typeof o)
        return (
          wrap_error_root(
            n,
            "ERR12: Invalid method name object @" + s.value,
            a
          ),
          void 0
        );
      const t = get_js_obj(e);
      if (is_nullish(t))
        return (
          wrap_error_root(
            n,
            "ERR13: Invalid JS object handle '" +
              e +
              "' while invoking '" +
              o +
              "'",
            a
          ),
          void 0
        );
      const r = mono_array_root_to_js_array(_);
      try {
        const e = t[o];
        if ("undefined" === typeof e)
          throw new Error(
            "Method: '" +
              o +
              "' not found for: '" +
              Object.prototype.toString.call(t) +
              "'"
          );
        const n = undefined;
        js_to_mono_obj_root(e.apply(t, r), a, true);
      } catch (e) {
        wrap_error_root(n, e, a);
      }
    } finally {
      _.release(), s.release(), a.release();
    }
  }
  function mono_wasm_get_object_property_ref(e, o, t, n) {
    const r = mono_wasm_new_external_root(o),
      _ = mono_wasm_new_external_root(n);
    try {
      const o = conv_string_root(r);
      if (!o)
        return (
          wrap_error_root(
            t,
            "Invalid property name object '" + r.value + "'",
            _
          ),
          void 0
        );
      const n = mono_wasm_get_jsobj_from_js_handle(e);
      if (is_nullish(n))
        return (
          wrap_error_root(
            t,
            "ERR01: Invalid JS object handle '" +
              e +
              "' while geting '" +
              o +
              "'",
            _
          ),
          void 0
        );
      const s = undefined;
      js_to_mono_obj_root(n[o], _, true);
    } catch (e) {
      wrap_error_root(t, e, _);
    } finally {
      _.release(), r.release();
    }
  }
  function mono_wasm_set_object_property_ref(e, o, t, n, r, _, s) {
    const a = mono_wasm_new_external_root(t),
      i = mono_wasm_new_external_root(o),
      c = mono_wasm_new_external_root(s);
    try {
      const t = conv_string_root(i);
      if (!t)
        return (
          wrap_error_root(_, "Invalid property name object '" + o + "'", c),
          void 0
        );
      const s = mono_wasm_get_jsobj_from_js_handle(e);
      if (is_nullish(s))
        return (
          wrap_error_root(
            _,
            "ERR02: Invalid JS object handle '" +
              e +
              "' while setting '" +
              t +
              "'",
            c
          ),
          void 0
        );
      let l = false;
      const u = unbox_mono_obj_root(a);
      if (n) (s[t] = u), (l = true);
      else {
        if (((l = false), !n && !Object.prototype.hasOwnProperty.call(s, t)))
          return js_to_mono_obj_root(false, c, false), void 0;
        true === r
          ? Object.prototype.hasOwnProperty.call(s, t) &&
            ((s[t] = u), (l = true))
          : ((s[t] = u), (l = true));
      }
      js_to_mono_obj_root(l, c, false);
    } catch (e) {
      wrap_error_root(_, e, c);
    } finally {
      c.release(), i.release(), a.release();
    }
  }
  function mono_wasm_get_by_index_ref(e, o, t, n) {
    const r = mono_wasm_new_external_root(n);
    try {
      const n = mono_wasm_get_jsobj_from_js_handle(e);
      if (is_nullish(n))
        return (
          wrap_error_root(
            t,
            "ERR03: Invalid JS object handle '" +
              e +
              "' while getting [" +
              o +
              "]",
            r
          ),
          void 0
        );
      const _ = undefined;
      js_to_mono_obj_root(n[o], r, true);
    } catch (e) {
      wrap_error_root(t, e, r);
    } finally {
      r.release();
    }
  }
  function mono_wasm_set_by_index_ref(e, o, t, n, r) {
    const _ = mono_wasm_new_external_root(t),
      s = mono_wasm_new_external_root(r);
    try {
      const t = mono_wasm_get_jsobj_from_js_handle(e);
      if (is_nullish(t))
        return (
          wrap_error_root(
            n,
            "ERR04: Invalid JS object handle '" +
              e +
              "' while setting [" +
              o +
              "]",
            s
          ),
          void 0
        );
      const r = unbox_mono_obj_root(_);
      (t[o] = r), s.clear();
    } catch (e) {
      wrap_error_root(n, e, s);
    } finally {
      s.release(), _.release();
    }
  }
  function mono_wasm_get_global_object_ref(e, o, t) {
    const n = mono_wasm_new_external_root(e),
      r = mono_wasm_new_external_root(t);
    try {
      const e = conv_string_root(n);
      let t;
      if (
        ((t = e ? globalThis[e] : globalThis),
        null === t || void 0 === typeof t)
      )
        return (
          wrap_error_root(o, "Global object '" + e + "' not found.", r), void 0
        );
      js_to_mono_obj_root(t, r, true);
    } catch (e) {
      wrap_error_root(o, e, r);
    } finally {
      r.release(), n.release();
    }
  }
  function _wrap_error_flag(e, o) {
    let t = "unknown exception";
    if (o) {
      t = o.toString();
      const e = o.stack;
      e && (e.startsWith(t) ? (t = e) : (t += "\n" + e)),
        (t = INTERNAL$1.mono_wasm_symbolicate_string(t));
    }
    return e && Module.setValue(e, 1, "i32"), t;
  }
  function wrap_error(e, o) {
    const t = undefined;
    return js_string_to_mono_string(_wrap_error_flag(e, o));
  }
  function wrap_error_root(e, o, t) {
    const n = undefined;
    js_string_to_mono_string_root(_wrap_error_flag(e, o), t);
  }
  function mono_method_get_call_signature_ref(e, o) {
    return call_method_ref(runtimeHelpers.get_call_sig_ref, void 0, "im", [
      e,
      o ? o.address : runtimeHelpers._null_root.address,
    ]);
  }
  function parseFQN(e) {
    const o = e.substring(e.indexOf("[") + 1, e.indexOf("]")).trim(),
      t = (e = e.substring(e.indexOf("]") + 1).trim()).substring(
        e.indexOf(":") + 1
      );
    let n = "",
      r = (e = e.substring(0, e.indexOf(":")).trim());
    if (-1 != e.indexOf(".")) {
      const o = e.lastIndexOf(".");
      (n = e.substring(0, o)), (r = e.substring(o + 1));
    }
    if (!o.trim()) throw new Error("No assembly name specified");
    if (!r.trim()) throw new Error("No class name specified");
    if (!t.trim()) throw new Error("No method name specified");
    return { assembly: o, namespace: n, classname: r, methodname: t };
  }
  function mono_method_resolve(e) {
    const {
        assembly: o,
        namespace: t,
        classname: n,
        methodname: r,
      } = parseFQN(e),
      _ = wrapped_c_functions.mono_wasm_assembly_load(o);
    if (!_) throw new Error("Could not find assembly: " + o);
    const s = wrapped_c_functions.mono_wasm_assembly_find_class(_, t, n);
    if (!s)
      throw new Error(
        "Could not find class: " + t + ":" + n + " in assembly " + o
      );
    const a = find_method(s, r, -1);
    if (!a) throw new Error("Could not find method: " + r);
    return a;
  }
  function mono_wasm_invoke_js_blazor(e, o, t, n, r) {
    try {
      const e = globalThis.Blazor;
      if (!e)
        throw new Error("The blazor.webassembly.js library is not loaded.");
      return e._internal.invokeJSFromDotNet(o, t, n, r);
    } catch (o) {
      const t = o.message + "\n" + o.stack,
        n = mono_wasm_new_root();
      return (
        js_string_to_mono_string_root(t, n),
        n.copy_to_address(e),
        n.release(),
        0
      );
    }
  }
  function mono_wasm_invoke_js(code, is_exception) {
    if (code === MonoStringNull) return MonoStringNull;
    const js_code = conv_string(code);
    try {
      const closedEval = function (Module, MONO, BINDING, INTERNAL, code) {
          return eval(code);
        },
        res = closedEval(Module, MONO$1, BINDING$1, INTERNAL$1, js_code);
      return (
        Module.setValue(is_exception, 0, "i32"),
        "undefined" === typeof res || null === res
          ? MonoStringNull
          : js_string_to_mono_string(res.toString())
      );
    } catch (e) {
      return wrap_error(is_exception, e);
    }
  }
  function typed_array_from(e, o, t, n, r) {
    let _ = null;
    switch (r) {
      case 5:
        _ = new Int8Array(t - o);
        break;
      case 6:
        _ = new Uint8Array(t - o);
        break;
      case 7:
        _ = new Int16Array(t - o);
        break;
      case 8:
        _ = new Uint16Array(t - o);
        break;
      case 9:
        _ = new Int32Array(t - o);
        break;
      case 10:
        _ = new Uint32Array(t - o);
        break;
      case 13:
        _ = new Float32Array(t - o);
        break;
      case 14:
        _ = new Float64Array(t - o);
        break;
      case 15:
        _ = new Uint8ClampedArray(t - o);
        break;
      default:
        throw new Error("Unknown array type " + r);
    }
    return typedarray_copy_from(_, e, o, t, n), _;
  }
  function typedarray_copy_to(e, o, t, n, r) {
    if (has_backing_array_buffer(e) && e.BYTES_PER_ELEMENT) {
      if (r !== e.BYTES_PER_ELEMENT)
        throw new Error(
          "Inconsistent element sizes: TypedArray.BYTES_PER_ELEMENT '" +
            e.BYTES_PER_ELEMENT +
            "' sizeof managed element: '" +
            r +
            "'"
        );
      let _ = (n - t) * r;
      const s = e.length * e.BYTES_PER_ELEMENT;
      _ > s && (_ = s);
      const a = t * r,
        i = undefined;
      return (
        new Uint8Array(Module.HEAPU8.buffer, o + a, _).set(
          new Uint8Array(e.buffer, e.byteOffset, _)
        ),
        _
      );
    }
    throw new Error("Object '" + e + "' is not a typed array");
  }
  function typedarray_copy_from(e, o, t, n, r) {
    if (has_backing_array_buffer(e) && e.BYTES_PER_ELEMENT) {
      if (r !== e.BYTES_PER_ELEMENT)
        throw new Error(
          "Inconsistent element sizes: TypedArray.BYTES_PER_ELEMENT '" +
            e.BYTES_PER_ELEMENT +
            "' sizeof managed element: '" +
            r +
            "'"
        );
      let _ = (n - t) * r;
      const s = e.length * e.BYTES_PER_ELEMENT;
      _ > s && (_ = s);
      const a = undefined,
        i = t * r;
      return (
        new Uint8Array(e.buffer, 0, _).set(
          Module.HEAPU8.subarray(o + i, o + i + _)
        ),
        _
      );
    }
    throw new Error("Object '" + e + "' is not a typed array");
  }
  function mono_wasm_typed_array_copy_to_ref(e, o, t, n, r, _, s) {
    const a = mono_wasm_new_external_root(s);
    try {
      const s = mono_wasm_get_jsobj_from_js_handle(e);
      if (is_nullish(s))
        return (
          wrap_error_root(_, "ERR07: Invalid JS object handle '" + e + "'", a),
          void 0
        );
      const i = undefined;
      js_to_mono_obj_root(typedarray_copy_to(s, o, t, n, r), a, false);
    } catch (e) {
      wrap_error_root(_, String(e), a);
    } finally {
      a.release();
    }
  }
  function mono_wasm_typed_array_from_ref(e, o, t, n, r, _, s) {
    const a = mono_wasm_new_external_root(s);
    try {
      const _ = undefined;
      js_to_mono_obj_root(typed_array_from(e, o, t, n, r), a, true);
    } catch (e) {
      wrap_error_root(_, String(e), a);
    } finally {
      a.release();
    }
  }
  function mono_wasm_typed_array_copy_from_ref(e, o, t, n, r, _, s) {
    const a = mono_wasm_new_external_root(s);
    try {
      const s = mono_wasm_get_jsobj_from_js_handle(e);
      if (is_nullish(s))
        return (
          wrap_error_root(_, "ERR08: Invalid JS object handle '" + e + "'", a),
          void 0
        );
      const i = undefined;
      js_to_mono_obj_root(typedarray_copy_from(s, o, t, n, r), a, false);
    } catch (e) {
      wrap_error_root(_, String(e), a);
    } finally {
      a.release();
    }
  }
  function has_backing_array_buffer(e) {
    return "undefined" !== typeof SharedArrayBuffer
      ? e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer
      : e.buffer instanceof ArrayBuffer;
  }
  function mono_wasm_load_bytes_into_heap(e) {
    const o = Module._malloc(e.length),
      t = undefined;
    return new Uint8Array(Module.HEAPU8.buffer, o, e.length).set(e), o;
  }
  const _class_cache_by_assembly = new Map();
  let _corlib = MonoAssemblyNull;
  function _find_cached_class(e, o, t) {
    let n = _class_cache_by_assembly.get(e);
    n || _class_cache_by_assembly.set(e, (n = new Map()));
    let r = n.get(o);
    return r || ((r = new Map()), n.set(o, r)), r.get(t);
  }
  function _set_cached_class(e, o, t, n) {
    const r = _class_cache_by_assembly.get(e);
    if (!r) throw new Error("internal error");
    const _ = r.get(o);
    if (!_) throw new Error("internal error");
    _.set(t, n);
  }
  function find_corlib_class(e, o, t) {
    _corlib || (_corlib = wrapped_c_functions.mono_wasm_get_corlib());
    let n = _find_cached_class(_corlib, e, o);
    if (void 0 !== n) return n;
    if (
      ((n = wrapped_c_functions.mono_wasm_assembly_find_class(_corlib, e, o)),
      t && !n)
    )
      throw new Error(`Failed to find corlib class ${e}.${o}`);
    return _set_cached_class(_corlib, e, o, n), n;
  }
  async function mono_run_main_and_exit(e, o) {
    try {
      const t = undefined;
      set_exit_code(await mono_run_main(e, o));
    } catch (e) {
      if (e instanceof ExitStatus) return;
      set_exit_code(1, e);
    }
  }
  async function mono_run_main(e, o) {
    return (
      mono_wasm_set_main_args(e, o),
      -1 == runtimeHelpers.wait_for_debugger
        ? (console.log("waiting for debugger..."),
          await mono_wasm_wait_for_debugger().then(() =>
            mono_call_assembly_entry_point(e, [o], "m")
          ))
        : mono_call_assembly_entry_point(e, [o], "m")
    );
  }
  function mono_on_abort(e) {
    runtime_is_initialized_reject(e), set_exit_code(1, e);
  }
  function set_exit_code(e, o) {
    !o || o instanceof ExitStatus
      ? (o = new ExitStatus(e))
      : o instanceof Error
      ? Module.printErr(INTERNAL$1.mono_wasm_stringify_as_error_with_stack(o))
      : "string" == typeof o
      ? Module.printErr(o)
      : Module.printErr(JSON.stringify(o)),
      quit(e, o);
  }
  let mono_wasm_crypto = null,
    runtime_is_initialized_resolve,
    runtime_is_initialized_reject;
  function dotnet_browser_can_use_subtle_crypto_impl() {
    return null === mono_wasm_crypto ? 0 : 1;
  }
  function dotnet_browser_simple_digest_hash(e, o, t, n, r) {
    if (!!!mono_wasm_crypto)
      throw new Error("Assert failed: subtle crypto not initialized");
    const _ = {
        func: "digest",
        type: e,
        data: Array.from(Module.HEAPU8.subarray(o, o + t)),
      },
      s = mono_wasm_crypto.channel.send_msg(JSON.stringify(_)),
      a = JSON.parse(s);
    if (a.length > r)
      throw (
        (console.info("call_digest: about to throw!"),
        "DIGEST HASH: Digest length exceeds output length: " +
          a.length +
          " > " +
          r)
      );
    return Module.HEAPU8.set(a, n), 1;
  }
  function dotnet_browser_sign(e, o, t, n, r, _, s) {
    if (!!!mono_wasm_crypto)
      throw new Error("Assert failed: subtle crypto not initialized");
    const a = {
        func: "sign",
        type: e,
        key: Array.from(Module.HEAPU8.subarray(o, o + t)),
        data: Array.from(Module.HEAPU8.subarray(n, n + r)),
      },
      i = mono_wasm_crypto.channel.send_msg(JSON.stringify(a)),
      c = JSON.parse(i);
    if (c.length > s)
      throw (
        (console.info("dotnet_browser_sign: about to throw!"),
        "SIGN HASH: Sign length exceeds output length: " + c.length + " > " + s)
      );
    return Module.HEAPU8.set(c, _), 1;
  }
  function init_crypto() {
    if (
      "undefined" !== typeof globalThis.crypto &&
      "undefined" !== typeof globalThis.crypto.subtle &&
      "undefined" !== typeof SharedArrayBuffer &&
      "undefined" !== typeof Worker
    ) {
      console.debug("MONO_WASM: Initializing Crypto WebWorker");
      const e = LibraryChannel.create(1024),
        o = new Worker("dotnet-crypto-worker.js");
      (mono_wasm_crypto = { channel: e, worker: o }),
        o.postMessage({
          comm_buf: e.get_comm_buffer(),
          msg_buf: e.get_msg_buffer(),
          msg_char_len: e.get_msg_len(),
        }),
        (o.onerror = (e) => {
          console.warn(
            `MONO_WASM: Error in Crypto WebWorker. Cryptography digest calls will fallback to managed implementation. Error: ${e.message}`
          ),
            (mono_wasm_crypto = null);
        });
    }
  }
  class LibraryChannel {
    constructor(e) {
      this.msg_char_len = e;
      const o = 4,
        t = 4 * (this.COMM_LAST_IDX + 1);
      this.comm_buf = new SharedArrayBuffer(t);
      const n = 2,
        r = 2 * this.msg_char_len;
      (this.msg_buf = new SharedArrayBuffer(r)),
        (this.comm = new Int32Array(this.comm_buf)),
        (this.msg = new Uint16Array(this.msg_buf));
    }
    get LOCK_UNLOCKED() {
      return 0;
    }
    get LOCK_OWNED() {
      return 1;
    }
    get STATE_IDX() {
      return 0;
    }
    get MSG_SIZE_IDX() {
      return 1;
    }
    get LOCK_IDX() {
      return 2;
    }
    get COMM_LAST_IDX() {
      return this.LOCK_IDX;
    }
    get STATE_SHUTDOWN() {
      return -1;
    }
    get STATE_IDLE() {
      return 0;
    }
    get STATE_REQ() {
      return 1;
    }
    get STATE_RESP() {
      return 2;
    }
    get STATE_REQ_P() {
      return 3;
    }
    get STATE_RESP_P() {
      return 4;
    }
    get STATE_AWAIT() {
      return 5;
    }
    get_msg_len() {
      return this.msg_char_len;
    }
    get_msg_buffer() {
      return this.msg_buf;
    }
    get_comm_buffer() {
      return this.comm_buf;
    }
    send_msg(e) {
      if (Atomics.load(this.comm, this.STATE_IDX) !== this.STATE_IDLE)
        throw (
          "OWNER: Invalid sync communication channel state. " +
          Atomics.load(this.comm, this.STATE_IDX)
        );
      return this.send_request(e), this.read_response();
    }
    shutdown() {
      if (Atomics.load(this.comm, this.STATE_IDX) !== this.STATE_IDLE)
        throw (
          "OWNER: Invalid sync communication channel state. " +
          Atomics.load(this.comm, this.STATE_IDX)
        );
      Atomics.store(this.comm, this.MSG_SIZE_IDX, 0),
        Atomics.store(this.comm, this.STATE_IDX, this.STATE_SHUTDOWN),
        Atomics.notify(this.comm, this.STATE_IDX);
    }
    send_request(e) {
      let o;
      const t = e.length;
      let n = 0;
      for (;;) {
        this.acquire_lock();
        const r = this.write_to_msg(e, n, t);
        if (
          ((n += r),
          Atomics.store(this.comm, this.MSG_SIZE_IDX, r),
          (o = n === t ? this.STATE_REQ : this.STATE_REQ_P),
          Atomics.store(this.comm, this.STATE_IDX, o),
          this.release_lock(),
          Atomics.notify(this.comm, this.STATE_IDX),
          o === this.STATE_REQ)
        )
          break;
        do {
          o = Atomics.load(this.comm, this.STATE_IDX);
        } while (o !== this.STATE_AWAIT);
      }
    }
    write_to_msg(e, o, t) {
      let n = 0,
        r = o;
      for (; n < this.msg_char_len && r < t; )
        (this.msg[n] = e.charCodeAt(r)), r++, n++;
      return r - o;
    }
    read_response() {
      let e,
        o = "";
      for (;;) {
        do {
          e = Atomics.load(this.comm, this.STATE_IDX);
        } while (e !== this.STATE_RESP && e !== this.STATE_RESP_P);
        this.acquire_lock();
        const t = Atomics.load(this.comm, this.MSG_SIZE_IDX);
        if (((o += this.read_from_msg(0, t)), e === this.STATE_RESP)) {
          this.release_lock();
          break;
        }
        Atomics.store(this.comm, this.MSG_SIZE_IDX, 0),
          Atomics.store(this.comm, this.STATE_IDX, this.STATE_AWAIT),
          this.release_lock(),
          Atomics.notify(this.comm, this.STATE_IDX);
      }
      return (
        Atomics.store(this.comm, this.STATE_IDX, this.STATE_IDLE),
        Atomics.notify(this.comm, this.STATE_IDX),
        o
      );
    }
    read_from_msg(e, o) {
      const t = [];
      return (
        this.msg.slice(e, o).forEach((e, o) => (t[o] = e)),
        String.fromCharCode.apply(null, t)
      );
    }
    acquire_lock() {
      for (
        ;
        Atomics.compareExchange(
          this.comm,
          this.LOCK_IDX,
          this.LOCK_UNLOCKED,
          this.LOCK_OWNED
        ) !== this.LOCK_UNLOCKED;

      );
    }
    release_lock() {
      const e = Atomics.compareExchange(
        this.comm,
        this.LOCK_IDX,
        this.LOCK_OWNED,
        this.LOCK_UNLOCKED
      );
      if (e !== this.LOCK_OWNED)
        throw (
          "CRYPTO: LibraryChannel tried to release a lock that wasn't acquired: " +
          e
        );
    }
    static create(e) {
      return void 0 === e && (e = 1024), new LibraryChannel(e);
    }
  }
  const mono_wasm_runtime_is_initialized = new GuardedPromise((e, o) => {
    (runtime_is_initialized_resolve = e), (runtime_is_initialized_reject = o);
  });
  let ctx = null;
  function configure_emscripten_startup(e, o) {
    if (
      "object" === typeof globalThis.document &&
      "function" === typeof globalThis.document.createElement
    ) {
      const o = Array.from(document.head.getElementsByTagName("link")).filter(
        (e) =>
          void 0 !== e.rel &&
          "modulepreload" == e.rel &&
          void 0 !== e.href &&
          -1 != e.href.indexOf("dotnet") &&
          -1 != e.href.indexOf(".js")
      );
      if (1 == o.length) {
        const t = o[0].href;
        console.log("determined url of main script to be " + t),
          (e.mainScriptUrlOrBlob = t);
      } else {
        const o = globalThis.document.createElement("a");
        (o.href = "dotnet.js"),
          console.log("determined url of main script to be " + o.href),
          (e.mainScriptUrlOrBlob = o.href);
      }
    }
    e.preInit
      ? "function" === typeof e.preInit && (e.preInit = [e.preInit])
      : (e.preInit = []),
      e.preRun
        ? "function" === typeof e.preRun && (e.preRun = [e.preRun])
        : (e.preRun = []),
      e.postRun
        ? "function" === typeof e.postRun && (e.postRun = [e.postRun])
        : (e.postRun = []),
      (e.configSrc || e.config) &&
        (e.preInit.push(mono_wasm_pre_init),
        e.postRun.unshift(mono_wasm_after_runtime_initialized),
        (e.ready = e.ready.then(
          async () => (await mono_wasm_runtime_is_initialized, o)
        ))),
      e.onAbort || (e.onAbort = () => mono_on_abort);
  }
  async function mono_wasm_pre_init() {
    const e = Module;
    if (
      (Module.addRunDependency("mono_wasm_pre_init"),
      ENVIRONMENT_IS_NODE && ENVIRONMENT_IS_ESM && (await requirePromise),
      init_crypto(),
      e.configSrc)
    ) {
      try {
        await mono_wasm_load_config(e.configSrc);
      } catch (e) {
        throw (runtime_is_initialized_reject(e), e);
      }
      if (e.onConfigLoaded)
        try {
          await e.onConfigLoaded(runtimeHelpers.config);
        } catch (e) {
          throw (
            (_print_error("MONO_WASM: onConfigLoaded () failed", e),
            runtime_is_initialized_reject(e),
            e)
          );
        }
    }
    if (e.config)
      try {
        await mono_download_assets(Module.config);
      } catch (e) {
        throw (runtime_is_initialized_reject(e), e);
      }
    Module.removeRunDependency("mono_wasm_pre_init");
  }
  function mono_wasm_after_runtime_initialized() {
    Module.config &&
      !Module.config.isError &&
      (finalize_assets(Module.config), finalize_startup(Module.config));
  }
  function _print_error(e, o) {
    Module.printErr(`${e}: ${JSON.stringify(o)}`),
      o.stack &&
        (Module.printErr("MONO_WASM: Stacktrace: \n"),
        Module.printErr(o.stack));
  }
  function mono_wasm_setenv(e, o) {
    wrapped_c_functions.mono_wasm_setenv(e, o);
  }
  function mono_wasm_set_runtime_options(e) {
    if (!Array.isArray(e))
      throw new Error("Expected runtime_options to be an array of strings");
    const o = Module._malloc(4 * e.length);
    let t = 0;
    for (let n = 0; n < e.length; ++n) {
      const r = e[n];
      if ("string" !== typeof r)
        throw new Error("Expected runtime_options to be an array of strings");
      Module.setValue(
        o + 4 * t,
        wrapped_c_functions.mono_wasm_strdup(r),
        "i32"
      ),
        (t += 1);
    }
    wrapped_c_functions.mono_wasm_parse_runtime_options(e.length, o);
  }
  function _handle_fetched_asset(e, o) {
    if (!ctx) throw new Error("Assert failed: Context is expected");
    if (!e.buffer) throw new Error("Assert failed: asset.buffer is expected");
    const t = new Uint8Array(e.buffer);
    ctx.tracing &&
      console.log(
        `MONO_WASM: Loaded:${e.name} as ${e.behavior} size ${t.length} from ${o}`
      );
    const n = "string" === typeof e.virtual_path ? e.virtual_path : e.name;
    let r = null;
    switch (e.behavior) {
      case "resource":
      case "assembly":
        ctx.loaded_files.push({ url: o, file: n });
      case "heap":
      case "icu":
        (r = mono_wasm_load_bytes_into_heap(t)),
          (ctx.loaded_assets[n] = [r, t.length]);
        break;
      case "vfs": {
        const e = n.lastIndexOf("/");
        let o = e > 0 ? n.substr(0, e) : null,
          r = e > 0 ? n.substr(e + 1) : n;
        r.startsWith("/") && (r = r.substr(1)),
          o
            ? (ctx.tracing &&
                console.log(`MONO_WASM: Creating directory '${o}'`),
              Module.FS_createPath("/", o, true, true))
            : (o = "/"),
          ctx.tracing &&
            console.log(`MONO_WASM: Creating file '${r}' in directory '${o}'`),
          mono_wasm_load_data_archive(t, o) ||
            Module.FS_createDataFile(o, r, t, true, true, true);
        break;
      }
      default:
        throw new Error(
          `Unrecognized asset behavior:${e.behavior}, for asset ${e.name}`
        );
    }
    if ("assembly" === e.behavior) {
      const e = undefined;
      if (!wrapped_c_functions.mono_wasm_add_assembly(n, r, t.length)) {
        const e = ctx.loaded_files.findIndex((e) => e.file == n);
        ctx.loaded_files.splice(e, 1);
      }
    } else
      "icu" === e.behavior
        ? mono_wasm_load_icu_data(r) ||
          Module.printErr(`MONO_WASM: Error loading ICU asset ${e.name}`)
        : "resource" === e.behavior &&
          wrapped_c_functions.mono_wasm_add_satellite_assembly(
            n,
            e.culture,
            r,
            t.length
          );
  }
  function _apply_configuration_from_args(e) {
    const o = e.environment_variables || {};
    if ("object" !== typeof o)
      throw new Error(
        "Expected config.environment_variables to be unset or a dictionary-style object"
      );
    for (const e in o) {
      const t = o[e];
      if ("string" !== typeof t)
        throw new Error(
          `Expected environment variable '${e}' to be a string but it was ${typeof t}: '${t}'`
        );
      mono_wasm_setenv(e, t);
    }
    e.runtime_options && mono_wasm_set_runtime_options(e.runtime_options),
      e.aot_profiler_options &&
        mono_wasm_init_aot_profiler(e.aot_profiler_options),
      e.coverage_profiler_options &&
        mono_wasm_init_coverage_profiler(e.coverage_profiler_options);
  }
  function finalize_startup(e) {
    const o = globalThis;
    try {
      if (!e || e.isError) return;
      e.diagnostic_tracing &&
        console.debug("MONO_WASM: Initializing mono runtime");
      const t = Module;
      if (!Module.disableDotnet6Compatibility && Module.exports)
        for (let e = 0; e < Module.exports.length; ++e) {
          const t = Module.exports[e],
            n = Module[t];
          n
            ? (o[t] = n)
            : console.warn(
                `MONO_WASM: The exported symbol ${t} could not be found in the emscripten module`
              );
        }
      try {
        _apply_configuration_from_args(e),
          mono_wasm_globalization_init(
            e.globalization_mode,
            e.diagnostic_tracing
          ),
          wrapped_c_functions.mono_wasm_load_runtime(
            "unused",
            e.debug_level || 0
          ),
          (runtimeHelpers.wait_for_debugger = e.wait_for_debugger);
      } catch (e) {
        if (
          (_print_error("MONO_WASM: mono_wasm_load_runtime () failed", e),
          runtime_is_initialized_reject(e),
          ENVIRONMENT_IS_SHELL || ENVIRONMENT_IS_NODE)
        ) {
          const e = undefined;
          (0, wrapped_c_functions.mono_wasm_exit)(1);
        }
      }
      let n;
      bindings_lazy_init();
      try {
        n = Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (e) {}
      mono_wasm_setenv("TZ", n || "UTC"), mono_wasm_runtime_ready();
      const r = e;
      if (r.loaded_cb)
        try {
          r.loaded_cb();
        } catch (e) {
          throw (
            (_print_error("MONO_WASM: loaded_cb () failed", e),
            runtime_is_initialized_reject(e),
            e)
          );
        }
      if (t.onDotnetReady)
        try {
          t.onDotnetReady();
        } catch (e) {
          throw (
            (_print_error("MONO_WASM: onDotnetReady () failed", e),
            runtime_is_initialized_reject(e),
            e)
          );
        }
      runtime_is_initialized_resolve();
    } catch (e) {
      throw (
        (_print_error("MONO_WASM: Error in finalize_startup", e),
        runtime_is_initialized_reject(e),
        e)
      );
    }
  }
  function bindings_lazy_init() {
    if (runtimeHelpers.mono_wasm_bindings_is_ready) return;
    (runtimeHelpers.mono_wasm_bindings_is_ready = true),
      (Object.prototype[wasm_type_symbol] = 0),
      (Array.prototype[wasm_type_symbol] = 1),
      (ArrayBuffer.prototype[wasm_type_symbol] = 2),
      (DataView.prototype[wasm_type_symbol] = 3),
      (Function.prototype[wasm_type_symbol] = 4),
      (Uint8Array.prototype[wasm_type_symbol] = 11),
      (runtimeHelpers._box_buffer_size = 65536),
      (runtimeHelpers._unbox_buffer_size = 65536),
      (runtimeHelpers._box_buffer = Module._malloc(
        runtimeHelpers._box_buffer_size
      )),
      (runtimeHelpers._unbox_buffer = Module._malloc(
        runtimeHelpers._unbox_buffer_size
      )),
      (runtimeHelpers._i52_error_scratch_buffer = Module._malloc(4)),
      (runtimeHelpers._class_int32 = find_corlib_class("System", "Int32")),
      (runtimeHelpers._class_uint32 = find_corlib_class("System", "UInt32")),
      (runtimeHelpers._class_double = find_corlib_class("System", "Double")),
      (runtimeHelpers._class_boolean = find_corlib_class("System", "Boolean")),
      (runtimeHelpers.bind_runtime_method = bind_runtime_method);
    const e = INTERNAL$1.BINDING_ASM,
      o = e.substring(e.indexOf("[") + 1, e.indexOf("]")).trim(),
      t = e.substring(e.indexOf("]") + 1).trim(),
      n = wrapped_c_functions.mono_wasm_assembly_load(o);
    if (!n) throw "Can't find bindings module assembly: " + o;
    if (
      t &&
      t.length &&
      ((runtimeHelpers.runtime_classname = t), -1 != t.indexOf("."))
    ) {
      const e = t.lastIndexOf(".");
      (runtimeHelpers.runtime_namespace = t.substring(0, e)),
        (runtimeHelpers.runtime_classname = t.substring(e + 1));
    }
    if (
      ((runtimeHelpers.wasm_runtime_class =
        wrapped_c_functions.mono_wasm_assembly_find_class(
          n,
          runtimeHelpers.runtime_namespace,
          runtimeHelpers.runtime_classname
        )),
      !runtimeHelpers.wasm_runtime_class)
    )
      throw "Can't find " + t + " class";
    if (
      ((runtimeHelpers.get_call_sig_ref = get_method("GetCallSignatureRef")),
      !runtimeHelpers.get_call_sig_ref)
    )
      throw "Can't find GetCallSignatureRef method";
    _create_primitive_converters(),
      (runtimeHelpers._box_root = mono_wasm_new_root()),
      (runtimeHelpers._null_root = mono_wasm_new_root());
  }
  async function mono_load_runtime_and_bcl_args(e) {
    await mono_download_assets(e), finalize_assets(e);
  }
  async function mono_download_assets(e) {
    if (e && !e.isError)
      try {
        e.enable_debugging && (e.debug_level = e.enable_debugging),
          (e.diagnostic_tracing = e.diagnostic_tracing || false),
          (ctx = {
            tracing: e.diagnostic_tracing,
            pending_count: e.assets.length,
            downloading_count: e.assets.length,
            fetch_all_promises: null,
            resolved_promises: [],
            loaded_assets: Object.create(null),
            loaded_files: [],
          }),
          Module.imports.fetch ||
            "function" !== typeof e.fetch_file_cb ||
            (runtimeHelpers.fetch = e.fetch_file_cb);
        const o = 100;
        let t = 0,
          n,
          r;
        const _ = async (e, _) => {
            for (; n; ) await n;
            ++t,
              t == o &&
                (ctx.tracing &&
                  console.log(
                    "MONO_WASM: Throttling further parallel downloads"
                  ),
                (n = new Promise((e) => {
                  r = e;
                })));
            const s = _.name + (_.culture || "");
            Module.addRunDependency(s);
            const a = _.load_remote ? e.remote_sources : [""];
            let i, c;
            if (_.buffer)
              return --ctx.downloading_count, { asset: _, attemptUrl: void 0 };
            for (let o of a) {
              let t;
              if (("./" === o && (o = ""), "" === o.trim()))
                if ("assembly" === _.behavior)
                  t = locateFile(e.assembly_root + "/" + _.name);
                else if ("resource" === _.behavior) {
                  const o =
                    "" !== _.culture ? `${_.culture}/${_.name}` : _.name;
                  t = locateFile(e.assembly_root + "/" + o);
                } else t = _.name;
              else t = o + _.name;
              _.name === t
                ? ctx.tracing &&
                  console.log(`MONO_WASM: Attempting to fetch '${t}'`)
                : ctx.tracing &&
                  console.log(
                    `MONO_WASM: Attempting to fetch '${t}' for ${_.name}`
                  );
              try {
                const e = await runtimeHelpers.fetch(t);
                if (!e.ok) {
                  i = new Error(
                    `MONO_WASM: Fetch '${t}' for ${_.name} failed ${e.status} ${e.statusText}`
                  );
                  continue;
                }
                (_.buffer = await e.arrayBuffer()),
                  (c = { asset: _, attemptUrl: t }),
                  --ctx.downloading_count,
                  (i = void 0);
              } catch (e) {
                i = new Error(
                  `MONO_WASM: Fetch '${t}' for ${_.name} failed ${e}`
                );
                continue;
              }
              if (!i) break;
            }
            if (
              (--t,
              n &&
                t == ((o / 2) | 0) &&
                (ctx.tracing &&
                  console.log("MONO_WASM: Resuming more parallel downloads"),
                r(),
                (n = void 0)),
              i)
            ) {
              const o = undefined;
              if (
                !(
                  _.is_optional ||
                  (_.name.match(/\.pdb$/) && e.ignore_pdb_load_errors)
                )
              )
                throw i;
            }
            return Module.removeRunDependency(s), c;
          },
          s = [];
        for (const o of e.assets) s.push(_(e, o));
        (ctx.fetch_all_promises = Promise.all(s)),
          (ctx.resolved_promises = await ctx.fetch_all_promises);
      } catch (e) {
        throw (
          (Module.printErr("MONO_WASM: Error in mono_download_assets: " + e),
          runtime_is_initialized_reject(e),
          e)
        );
      }
  }
  function finalize_assets(e) {
    if (!(e && !e.isError)) throw new Error("Assert failed: Expected config");
    if (!(ctx && 0 == ctx.downloading_count))
      throw new Error("Assert failed: Expected assets to be downloaded");
    try {
      for (const e of ctx.resolved_promises)
        e &&
          (_handle_fetched_asset(e.asset, e.attemptUrl), --ctx.pending_count);
      ctx.loaded_files.forEach((e) => MONO$1.loaded_files.push(e.url)),
        ctx.tracing &&
          (console.log(
            "MONO_WASM: loaded_assets: " + JSON.stringify(ctx.loaded_assets)
          ),
          console.log(
            "MONO_WASM: loaded_files: " + JSON.stringify(ctx.loaded_files)
          ));
    } catch (e) {
      throw (
        (Module.printErr("MONO_WASM: Error in finalize_assets: " + e),
        runtime_is_initialized_reject(e),
        e)
      );
    }
  }
  function mono_wasm_load_data_archive(e, o) {
    if (e.length < 8) return false;
    const t = new DataView(e.buffer),
      n = undefined;
    if (1651270004 != t.getUint32(0, true)) return false;
    const r = t.getUint32(4, true);
    if (0 == r || e.length < r + 8) return false;
    let _;
    try {
      const o = Module.UTF8ArrayToString(e, 8, r);
      if (((_ = JSON.parse(o)), !(_ instanceof Array))) return false;
    } catch (e) {
      return false;
    }
    e = e.slice(r + 8);
    const s = new Set();
    _.filter((e) => {
      const o = e[0],
        t = o.lastIndexOf("/"),
        n = o.slice(0, t + 1);
      s.add(n);
    }),
      s.forEach((e) => {
        Module.FS_createPath(o, e, true, true);
      });
    for (const t of _) {
      const n = t[0],
        r = t[1],
        _ = e.slice(0, r);
      Module.FS_createDataFile(o, n, _, true, true), (e = e.slice(r));
    }
    return true;
  }
  async function mono_wasm_load_config(e) {
    const o = Module;
    try {
      o.addRunDependency(e);
      const t = await runtimeHelpers.fetch(e),
        n = await t.json();
      (runtimeHelpers.config = n),
        (n.environment_variables = n.environment_variables || {}),
        (n.assets = n.assets || []),
        (n.runtime_options = n.runtime_options || []),
        (n.globalization_mode = n.globalization_mode || "auto"),
        Module.removeRunDependency(e);
    } catch (o) {
      const t = `Failed to load config file ${e} ${o}`;
      throw (
        (Module.printErr(t),
        (runtimeHelpers.config = { message: t, error: o, isError: true }),
        runtime_is_initialized_reject(o),
        o)
      );
    }
  }
  function mono_wasm_asm_loaded(e, o, t, n, r) {
    if (true !== runtimeHelpers.mono_wasm_runtime_is_ready) return;
    const _ = e !== CharPtrNull ? Module.UTF8ToString(e).concat(".dll") : "",
      s = undefined,
      a = toBase64StringImpl(new Uint8Array(Module.HEAPU8.buffer, o, t));
    let i;
    if (n) {
      const e = undefined;
      i = toBase64StringImpl(new Uint8Array(Module.HEAPU8.buffer, n, r));
    }
    mono_wasm_raise_debug_event({
      eventName: "AssemblyLoaded",
      assembly_name: _,
      assembly_b64: a,
      pdb_b64: i,
    });
  }
  function mono_wasm_set_main_args(e, o) {
    const t = o.length + 1,
      n = Module._malloc(4 * t);
    let r = 0;
    Module.setValue(n + 4 * r, wrapped_c_functions.mono_wasm_strdup(e), "i32"),
      (r += 1);
    for (let e = 0; e < o.length; ++e)
      Module.setValue(
        n + 4 * r,
        wrapped_c_functions.mono_wasm_strdup(o[e]),
        "i32"
      ),
        (r += 1);
    wrapped_c_functions.mono_wasm_set_main_args(t, n);
  }
  let spread_timers_maximum = 0,
    isChromium = false,
    pump_count = 0,
    lastScheduledTimeoutId;
  if (globalThis.navigator) {
    const e = globalThis.navigator;
    e.userAgentData && e.userAgentData.brands
      ? (isChromium = e.userAgentData.brands.some((e) => "Chromium" == e.brand))
      : e.userAgent && (isChromium = e.userAgent.includes("Chrome"));
  }
  function pump_message() {
    for (; pump_count > 0; )
      --pump_count, wrapped_c_functions.mono_background_exec();
  }
  function prevent_timer_throttling() {
    if (!isChromium) return;
    const e = new Date().valueOf(),
      o = e + 36e4,
      t = undefined,
      n = 1e3;
    for (let t = Math.max(e + 1e3, spread_timers_maximum); t < o; t += n) {
      const o = undefined;
      setTimeout(() => {
        wrapped_c_functions.mono_set_timeout_exec(),
          pump_count++,
          pump_message();
      }, t - e);
    }
    spread_timers_maximum = o;
  }
  function schedule_background_exec() {
    ++pump_count, setTimeout(pump_message, 0);
  }
  function mono_set_timeout(e) {
    function mono_wasm_set_timeout_exec() {
      wrapped_c_functions.mono_set_timeout_exec();
    }
    lastScheduledTimeoutId &&
      (clearTimeout(lastScheduledTimeoutId), (lastScheduledTimeoutId = void 0)),
      (lastScheduledTimeoutId = setTimeout(mono_wasm_set_timeout_exec, e));
  }
  class Queue {
    constructor() {
      (this.queue = []), (this.offset = 0);
    }
    getLength() {
      return this.queue.length - this.offset;
    }
    isEmpty() {
      return 0 == this.queue.length;
    }
    enqueue(e) {
      this.queue.push(e);
    }
    dequeue() {
      if (0 === this.queue.length) return;
      const e = this.queue[this.offset];
      return (
        (this.queue[this.offset] = null),
        2 * ++this.offset >= this.queue.length &&
          ((this.queue = this.queue.slice(this.offset)), (this.offset = 0)),
        e
      );
    }
    peek() {
      return this.queue.length > 0 ? this.queue[this.offset] : void 0;
    }
    drain(e) {
      for (; this.getLength(); ) {
        const o = undefined;
        e(this.dequeue());
      }
    }
  }
  const wasm_ws_pending_send_buffer = Symbol.for("wasm ws_pending_send_buffer"),
    wasm_ws_pending_send_buffer_offset = Symbol.for(
      "wasm ws_pending_send_buffer_offset"
    ),
    wasm_ws_pending_send_buffer_type = Symbol.for(
      "wasm ws_pending_send_buffer_type"
    ),
    wasm_ws_pending_receive_event_queue = Symbol.for(
      "wasm ws_pending_receive_event_queue"
    ),
    wasm_ws_pending_receive_promise_queue = Symbol.for(
      "wasm ws_pending_receive_promise_queue"
    ),
    wasm_ws_pending_open_promise = Symbol.for("wasm ws_pending_open_promise"),
    wasm_ws_pending_close_promises = Symbol.for(
      "wasm ws_pending_close_promises"
    ),
    wasm_ws_pending_send_promises = Symbol.for("wasm ws_pending_send_promises"),
    wasm_ws_is_aborted = Symbol.for("wasm ws_is_aborted");
  let mono_wasm_web_socket_close_warning = false,
    _text_decoder_utf8,
    _text_encoder_utf8;
  const ws_send_buffer_blocking_threshold = 65536,
    emptyBuffer = new Uint8Array();
  function mono_wasm_web_socket_open_ref(e, o, t, n, r, _, s) {
    const a = mono_wasm_new_external_root(s),
      i = mono_wasm_new_external_root(e),
      c = mono_wasm_new_external_root(o),
      l = mono_wasm_new_root();
    l.copy_from_address(t);
    try {
      const e = conv_string_root(i);
      if (!e)
        return (
          wrap_error_root(_, "ERR12: Invalid uri '" + i.value + "'", a), void 0
        );
      const o = mono_array_root_to_js_array(c),
        t = _wrap_delegate_root_as_function(l),
        s = new globalThis.WebSocket(e, o),
        { promise: u, promise_control: m } = _create_cancelable_promise();
      (s[wasm_ws_pending_receive_event_queue] = new Queue()),
        (s[wasm_ws_pending_receive_promise_queue] = new Queue()),
        (s[wasm_ws_pending_open_promise] = m),
        (s[wasm_ws_pending_send_promises] = []),
        (s[wasm_ws_pending_close_promises] = []),
        (s.binaryType = "arraybuffer");
      const d = () => {
          s[wasm_ws_is_aborted] ||
            (m.resolve(null), prevent_timer_throttling());
        },
        f = (e) => {
          s[wasm_ws_is_aborted] ||
            (_mono_wasm_web_socket_on_message(s, e),
            prevent_timer_throttling());
        },
        w = (e) => {
          if ((s.removeEventListener("message", f), s[wasm_ws_is_aborted]))
            return;
          t(e.code, e.reason), m.reject(e.reason);
          for (const e of s[wasm_ws_pending_close_promises]) e.resolve();
          const o = undefined;
          s[wasm_ws_pending_receive_promise_queue].drain((e) => {
            const o = e.response_ptr;
            setI32(o + 0, 0),
              setI32(o + 4, 2),
              setI32(o + 8, 1),
              e.resolve(null);
          });
        },
        p = (e) => {
          m.reject(e.message);
        };
      s.addEventListener("message", f),
        s.addEventListener("open", d, { once: true }),
        s.addEventListener("close", w, { once: true }),
        s.addEventListener("error", p, { once: true });
      const g = mono_wasm_get_js_handle(s);
      Module.setValue(n, g, "i32");
      const { then_js_handle: b } = _wrap_js_thenable_as_task_root(u, a);
      Module.setValue(r, b, "i32");
    } catch (e) {
      wrap_error_root(_, e, a);
    } finally {
      a.release(), i.release(), c.release(), l.release();
    }
  }
  function mono_wasm_web_socket_send(e, o, t, n, r, _, s, a, i) {
    const c = mono_wasm_new_external_root(i);
    try {
      const a = mono_wasm_get_jsobj_from_js_handle(e);
      if (!a) throw new Error("ERR17: Invalid JS object handle " + e);
      if (a.readyState != WebSocket.OPEN)
        throw new Error("InvalidState: The WebSocket is not connected.");
      const l = _mono_wasm_web_socket_send_buffering(a, o, t, n, r, _);
      if (!_ || !l) return c.clear(), void 0;
      _mono_wasm_web_socket_send_and_wait(a, l, s, i);
    } catch (e) {
      wrap_error_root(a, e, c);
    } finally {
      c.release();
    }
  }
  function mono_wasm_web_socket_receive(e, o, t, n, r, _, s, a) {
    const i = mono_wasm_new_external_root(a);
    try {
      const s = mono_wasm_get_jsobj_from_js_handle(e);
      if (!s) throw new Error("ERR18: Invalid JS object handle " + e);
      const a = s[wasm_ws_pending_receive_event_queue],
        c = s[wasm_ws_pending_receive_promise_queue],
        l = s.readyState;
      if (l != WebSocket.OPEN && l != WebSocket.CLOSING)
        throw new Error("InvalidState: The WebSocket is not connected.");
      if (a.getLength()) {
        if (0 != c.getLength()) throw new Error("ERR20: Invalid WS state");
        return (
          _mono_wasm_web_socket_receive_buffering(a, o, t, n, r),
          Module.setValue(_, 0, "i32"),
          i.clear(),
          void 0
        );
      }
      const { promise: u, promise_control: m } = _create_cancelable_promise(
          void 0,
          void 0
        ),
        d = m;
      (d.buffer_ptr = o),
        (d.buffer_offset = t),
        (d.buffer_length = n),
        (d.response_ptr = r),
        c.enqueue(d);
      const { then_js_handle: f } = _wrap_js_thenable_as_task_root(u, i);
      Module.setValue(_, f, "i32");
    } catch (e) {
      wrap_error_root(s, e, i);
    } finally {
      i.release();
    }
  }
  function mono_wasm_web_socket_close_ref(e, o, t, n, r, _, s) {
    const a = mono_wasm_new_external_root(s),
      i = mono_wasm_new_external_root(t);
    try {
      const t = mono_wasm_get_jsobj_from_js_handle(e);
      if (!t) throw new Error("ERR19: Invalid JS object handle " + e);
      if (t.readyState == WebSocket.CLOSED) return a.clear(), void 0;
      const _ = conv_string_root(i);
      if (n) {
        const { promise: e, promise_control: n } = _create_cancelable_promise();
        t[wasm_ws_pending_close_promises].push(n),
          "string" === typeof _ ? t.close(o, _) : t.close(o);
        const { then_js_handle: s } = _wrap_js_thenable_as_task_root(e, a);
        return Module.setValue(r, s, "i32"), void 0;
      }
      return (
        mono_wasm_web_socket_close_warning ||
          ((mono_wasm_web_socket_close_warning = true),
          console.warn(
            "WARNING: Web browsers do not support closing the output side of a WebSocket. CloseOutputAsync has closed the socket and discarded any incoming messages."
          )),
        "string" === typeof _ ? t.close(o, _) : t.close(o),
        Module.setValue(r, 0, "i32"),
        a.clear(),
        void 0
      );
    } catch (e) {
      wrap_error_root(_, e, a);
    } finally {
      a.release(), i.release();
    }
  }
  function mono_wasm_web_socket_abort(e, o, t) {
    const n = mono_wasm_new_external_root(t);
    try {
      const o = mono_wasm_get_jsobj_from_js_handle(e);
      if (!o) throw new Error("ERR18: Invalid JS object handle " + e);
      o[wasm_ws_is_aborted] = true;
      const t = o[wasm_ws_pending_open_promise];
      t && t.reject("OperationCanceledException");
      for (const e of o[wasm_ws_pending_close_promises])
        e.reject("OperationCanceledException");
      for (const e of o[wasm_ws_pending_send_promises])
        e.reject("OperationCanceledException");
      o[wasm_ws_pending_receive_promise_queue].drain((e) => {
        e.reject("OperationCanceledException");
      }),
        o.close(1e3, "Connection was aborted."),
        n.clear();
    } catch (e) {
      wrap_error_root(o, e, n);
    } finally {
      n.release();
    }
  }
  function _mono_wasm_web_socket_send_and_wait(e, o, t, n) {
    const r = mono_wasm_new_external_root(n);
    try {
      if (
        (e.send(o),
        (e[wasm_ws_pending_send_buffer] = null),
        e.bufferedAmount < ws_send_buffer_blocking_threshold)
      )
        return r.clear(), void 0;
      const { promise: n, promise_control: _ } = _create_cancelable_promise(),
        s = e[wasm_ws_pending_send_promises];
      s.push(_);
      let a = 1;
      const i = () => {
        if (0 === e.bufferedAmount) _.resolve(null);
        else if (e.readyState != WebSocket.OPEN)
          _.reject("InvalidState: The WebSocket is not connected.");
        else if (!_.isDone)
          return (
            globalThis.setTimeout(i, a), (a = Math.min(1.5 * a, 1e3)), void 0
          );
        const o = s.indexOf(_);
        o > -1 && s.splice(o, 1);
      };
      globalThis.setTimeout(i, 0);
      const { then_js_handle: c } = _wrap_js_thenable_as_task_root(n, r);
      Module.setValue(t, c, "i32");
    } finally {
      r.release();
    }
  }
  function _mono_wasm_web_socket_on_message(e, o) {
    const t = e[wasm_ws_pending_receive_event_queue],
      n = e[wasm_ws_pending_receive_promise_queue];
    if ("string" === typeof o.data)
      void 0 === _text_encoder_utf8 && (_text_encoder_utf8 = new TextEncoder()),
        t.enqueue({
          type: 0,
          data: _text_encoder_utf8.encode(o.data),
          offset: 0,
        });
    else {
      if ("ArrayBuffer" !== o.data.constructor.name)
        throw new Error("ERR19: WebSocket receive expected ArrayBuffer");
      t.enqueue({ type: 1, data: new Uint8Array(o.data), offset: 0 });
    }
    if (n.getLength() && t.getLength() > 1)
      throw new Error("ERR21: Invalid WS state");
    for (; n.getLength() && t.getLength(); ) {
      const e = n.dequeue();
      _mono_wasm_web_socket_receive_buffering(
        t,
        e.buffer_ptr,
        e.buffer_offset,
        e.buffer_length,
        e.response_ptr
      ),
        e.resolve(null);
    }
    prevent_timer_throttling();
  }
  function _mono_wasm_web_socket_receive_buffering(e, o, t, n, r) {
    const _ = e.peek(),
      s = Math.min(n, _.data.length - _.offset);
    if (s > 0) {
      const e = Module.HEAPU8.subarray(o + t, o + t + n),
        r = _.data.subarray(_.offset, _.offset + s);
      e.set(r, 0), (_.offset += s);
    }
    const a = _.data.length === _.offset ? 1 : 0;
    a && e.dequeue(), setI32(r + 0, s), setI32(r + 4, _.type), setI32(r + 8, a);
  }
  function _mono_wasm_web_socket_send_buffering(e, o, t, n, r, _) {
    let s = e[wasm_ws_pending_send_buffer],
      a = 0;
    const i = o + t;
    if (s) {
      if (
        ((a = e[wasm_ws_pending_send_buffer_offset]),
        (r = e[wasm_ws_pending_send_buffer_type]),
        0 !== n)
      ) {
        const o = Module.HEAPU8.subarray(i, i + n);
        if (a + n > s.length) {
          const t = new Uint8Array(1.5 * (a + n + 50));
          t.set(s, 0), t.set(o, a), (e[wasm_ws_pending_send_buffer] = s = t);
        } else s.set(o, a);
        (a += n), (e[wasm_ws_pending_send_buffer_offset] = a);
      }
    } else if (_) {
      if (0 !== n) {
        const e = undefined;
        (s = Module.HEAPU8.subarray(i, i + n)), (a = n);
      }
    } else {
      if (0 !== n) {
        const o = Module.HEAPU8.subarray(i, i + n);
        (s = new Uint8Array(o)),
          (a = n),
          (e[wasm_ws_pending_send_buffer_offset] = a),
          (e[wasm_ws_pending_send_buffer] = s);
      }
      e[wasm_ws_pending_send_buffer_type] = r;
    }
    if (_) {
      if (0 == a || null == s) return emptyBuffer;
      if (0 === r) {
        void 0 === _text_decoder_utf8 &&
          (_text_decoder_utf8 = new TextDecoder("utf-8", { fatal: false }));
        const e =
          "undefined" !== typeof SharedArrayBuffer &&
          s instanceof SharedArrayBuffer
            ? s.slice(0, a)
            : s.subarray(0, a);
        return _text_decoder_utf8.decode(e);
      }
      return s.subarray(0, a);
    }
    return null;
  }
  let node_fs, node_url;
  async function fetch_like(e) {
    try {
      if (ENVIRONMENT_IS_NODE) {
        if (!node_fs) {
          const e = await requirePromise;
          (node_url = e("url")), (node_fs = e("fs"));
        }
        e.startsWith("file://") && (e = node_url.fileURLToPath(e));
        const o = await node_fs.promises.readFile(e);
        return {
          ok: true,
          url: e,
          arrayBuffer: () => o,
          json: () => JSON.parse(o),
        };
      }
      if ("function" === typeof globalThis.fetch)
        return globalThis.fetch(e, { credentials: "same-origin" });
      if ("function" === typeof read) {
        const o = new Uint8Array(read(e, "binary"));
        return {
          ok: true,
          url: e,
          arrayBuffer: () => o,
          json: () => JSON.parse(Module.UTF8ArrayToString(o, 0, o.length)),
        };
      }
    } catch (o) {
      return {
        ok: false,
        url: e,
        arrayBuffer: () => {
          throw o;
        },
        json: () => {
          throw o;
        },
      };
    }
    throw new Error("No fetch implementation available");
  }
  function readAsync_like(e, o, t) {
    fetch_like(e)
      .then((e) => {
        o(e.arrayBuffer());
      })
      .catch((e) => {
        t(e);
      });
  }
  const sizeOfInt32 = 4;
  var State;
  function start_streaming(e) {
    wrapped_c_functions.mono_wasm_event_pipe_session_start_streaming(e);
  }
  function stop_streaming(e) {
    wrapped_c_functions.mono_wasm_event_pipe_session_disable(e);
  }
  (function (e) {
    (e[(e.Initialized = 0)] = "Initialized"),
      (e[(e.Started = 1)] = "Started"),
      (e[(e.Done = 2)] = "Done");
  })(State || (State = {}));
  class EventPipeFileSession {
    constructor(e, o) {
      (this.start = () => {
        if (this._state !== State.Initialized)
          throw new Error(
            `EventPipe session ${this.sessionID} already started`
          );
        (this._state = State.Started),
          start_streaming(this._sessionID),
          console.debug(`EventPipe session ${this.sessionID} started`);
      }),
        (this.stop = () => {
          if (this._state !== State.Started)
            throw new Error(
              `cannot stop an EventPipe session in state ${this._state}, not 'Started'`
            );
          (this._state = State.Done),
            stop_streaming(this._sessionID),
            console.debug(`EventPipe session ${this.sessionID} stopped`);
        }),
        (this.getTraceBlob = () => {
          if (this._state !== State.Done)
            throw new Error(`session is in state ${this._state}, not 'Done'`);
          const e = Module.FS_readFile(this._tracePath, { encoding: "binary" });
          return new Blob([e], { type: "application/octet-stream" });
        }),
        (this._state = State.Initialized),
        (this._sessionID = e),
        (this._tracePath = o),
        console.debug(`EventPipe session ${this.sessionID} created`);
    }
    get sessionID() {
      return BigInt(this._sessionID);
    }
  }
  const eventLevel = {
      LogAlways: 0,
      Critical: 1,
      Error: 2,
      Warning: 3,
      Informational: 4,
      Verbose: 5,
    },
    runtimeProviderName = "Microsoft-Windows-DotNETRuntime",
    runtimePrivateProviderName = "Microsoft-Windows-DotNETRuntimePrivate",
    sampleProfilerProviderName = "Microsoft-DotNETCore-SampleProfiler",
    runtimeProviderDefault = {
      name: runtimeProviderName,
      keyword_mask: "4c14fccbd",
      level: eventLevel.Verbose,
    },
    runtimePrivateProviderDefault = {
      name: runtimePrivateProviderName,
      keyword_mask: "4002000b",
      level: eventLevel.Verbose,
    },
    sampleProfilerProviderDefault = {
      name: sampleProfilerProviderName,
      keyword_mask: "0",
      level: eventLevel.Verbose,
    };
  class SessionOptionsBuilder {
    constructor() {
      this._providers = [];
    }
    static get Empty() {
      return new SessionOptionsBuilder();
    }
    static get DefaultProviders() {
      return this.Empty.addRuntimeProvider()
        .addRuntimePrivateProvider()
        .addSampleProfilerProvider();
    }
    setRundownEnabled(e) {
      return (this._rundown = e), this;
    }
    addProvider(e) {
      return this._providers.push(e), this;
    }
    addRuntimeProvider(e) {
      const o = { ...runtimeProviderDefault, ...e };
      return this._providers.push(o), this;
    }
    addRuntimePrivateProvider(e) {
      const o = { ...runtimePrivateProviderDefault, ...e };
      return this._providers.push(o), this;
    }
    addSampleProfilerProvider(e) {
      const o = { ...sampleProfilerProviderDefault, ...e };
      return this._providers.push(o), this;
    }
    build() {
      const e = this._providers.map((e) => {
        var o, t, n;
        const r = e.name,
          _ =
            "" +
            (null !==
              (o = null === e || void 0 === e ? void 0 : e.keyword_mask) &&
            void 0 !== o
              ? o
              : ""),
          s =
            null !== (t = null === e || void 0 === e ? void 0 : e.level) &&
            void 0 !== t
              ? t
              : eventLevel.Verbose,
          a =
            null !== (n = null === e || void 0 === e ? void 0 : e.args) &&
            void 0 !== n
              ? n
              : "",
          i = undefined;
        return `${r}:${_}:${s}${"" != a ? `:${a}` : ""}`;
      });
      return { collectRundownEvents: this._rundown, providers: e.join(",") };
    }
  }
  let totalSessions = 0;
  function createSessionWithPtrCB(e, o, t) {
    var n, r;
    const _ = true,
      s = "",
      a = 1,
      i =
        null !==
          (n = null === o || void 0 === o ? void 0 : o.collectRundownEvents) &&
        void 0 !== n
          ? n
          : _,
      c =
        null !== (r = null === o || void 0 === o ? void 0 : o.providers) &&
        void 0 !== r
          ? r
          : s;
    return (
      setI32(e, 0),
      !!wrapped_c_functions.mono_wasm_event_pipe_enable(t, 1, c, i, e) &&
        getI32(e)
    );
  }
  const diagnostics = {
      EventLevel: eventLevel,
      SessionOptionsBuilder: SessionOptionsBuilder,
      createEventPipeSession(e) {
        const o = `/trace-${totalSessions++}.nettrace`,
          t = withStackAlloc(sizeOfInt32, createSessionWithPtrCB, e, o);
        if (false === t) return null;
        const n = undefined,
          r = undefined;
        return new EventPipeFileSession(t, o);
      },
    },
    MONO = {
      mono_wasm_setenv: mono_wasm_setenv,
      mono_wasm_load_bytes_into_heap: mono_wasm_load_bytes_into_heap,
      mono_wasm_load_icu_data: mono_wasm_load_icu_data,
      mono_wasm_runtime_ready: mono_wasm_runtime_ready,
      mono_wasm_load_data_archive: mono_wasm_load_data_archive,
      mono_wasm_load_config: mono_wasm_load_config,
      mono_load_runtime_and_bcl_args: mono_load_runtime_and_bcl_args,
      mono_wasm_new_root_buffer: mono_wasm_new_root_buffer,
      mono_wasm_new_root: mono_wasm_new_root,
      mono_wasm_new_external_root: mono_wasm_new_external_root,
      mono_wasm_release_roots: mono_wasm_release_roots,
      mono_run_main: mono_run_main,
      mono_run_main_and_exit: mono_run_main_and_exit,
      mono_wasm_add_assembly: wrapped_c_functions.mono_wasm_add_assembly,
      mono_wasm_load_runtime: wrapped_c_functions.mono_wasm_load_runtime,
      config: runtimeHelpers.config,
      loaded_files: [],
      setB32: setB32,
      setI8: setI8,
      setI16: setI16,
      setI32: setI32,
      setI52: setI52,
      setU52: setU52,
      setI64Big: setI64Big,
      setU8: setU8,
      setU16: setU16,
      setU32: setU32,
      setF32: setF32,
      setF64: setF64,
      getB32: getB32,
      getI8: getI8,
      getI16: getI16,
      getI32: getI32,
      getI52: getI52,
      getU52: getU52,
      getI64Big: getI64Big,
      getU8: getU8,
      getU16: getU16,
      getU32: getU32,
      getF32: getF32,
      getF64: getF64,
      diagnostics: diagnostics,
    },
    BINDING = {
      mono_obj_array_new: wrapped_c_functions.mono_wasm_obj_array_new,
      mono_obj_array_set: wrapped_c_functions.mono_wasm_obj_array_set,
      js_string_to_mono_string: js_string_to_mono_string,
      js_typed_array_to_array: js_typed_array_to_array,
      mono_array_to_js_array: mono_array_to_js_array,
      js_to_mono_obj: js_to_mono_obj,
      conv_string: conv_string,
      unbox_mono_obj: unbox_mono_obj,
      conv_string_rooted: conv_string_root,
      mono_obj_array_new_ref: wrapped_c_functions.mono_wasm_obj_array_new_ref,
      mono_obj_array_set_ref: wrapped_c_functions.mono_wasm_obj_array_set_ref,
      js_string_to_mono_string_root: js_string_to_mono_string_root,
      js_typed_array_to_array_root: js_typed_array_to_array_root,
      js_to_mono_obj_root: js_to_mono_obj_root,
      conv_string_root: conv_string_root,
      unbox_mono_obj_root: unbox_mono_obj_root,
      mono_array_root_to_js_array: mono_array_root_to_js_array,
      bind_static_method: mono_bind_static_method,
      call_assembly_entry_point: mono_call_assembly_entry_point,
    };
  let exportedAPI;
  function initializeImportsAndExports(e, o, t) {
    const n = o.module,
      r = globalThis;
    setImportsAndExports(e, o),
      Object.assign(o.mono, MONO),
      Object.assign(o.binding, BINDING),
      Object.assign(o.internal, INTERNAL),
      (exportedAPI = {
        MONO: o.mono,
        BINDING: o.binding,
        INTERNAL: o.internal,
        Module: n,
        RuntimeBuildInfo: {
          ProductVersion: ProductVersion,
          Configuration: Configuration,
        },
      }),
      o.module.__undefinedConfig &&
        ((n.disableDotnet6Compatibility = true),
        (n.configSrc = "./mono-config.json")),
      n.print || (n.print = console.log.bind(console)),
      n.printErr || (n.printErr = console.error.bind(console)),
      (n.imports = n.imports || {}),
      n.imports.require ||
        (n.imports.require = (e) => {
          const o = n.imports[e];
          if (o) return o;
          if (t.require) return t.require(e);
          throw new Error(
            `Please provide Module.imports.${e} or Module.imports.require`
          );
        }),
      n.imports.fetch
        ? (runtimeHelpers.fetch = n.imports.fetch)
        : (runtimeHelpers.fetch = fetch_like),
      (t.fetch = runtimeHelpers.fetch),
      (t.readAsync = readAsync_like),
      (t.requireOut = n.imports.require);
    const _ = t.updateGlobalBufferAndViews;
    if (
      ((t.updateGlobalBufferAndViews = (e) => {
        _(e), afterUpdateGlobalBufferAndViews(e);
      }),
      (t.noExitRuntime = ENVIRONMENT_IS_WEB),
      "undefined" === typeof n.disableDotnet6Compatibility &&
        (n.disableDotnet6Compatibility = e.isESM),
      e.isGlobal || !n.disableDotnet6Compatibility)
    ) {
      Object.assign(n, exportedAPI),
        (n.mono_bind_static_method = (e, o) => (
          console.warn(
            "Module.mono_bind_static_method is obsolete, please use BINDING.bind_static_method instead"
          ),
          mono_bind_static_method(e, o)
        ));
      const t = (e, o) => {
        if ("undefined" !== typeof r[e]) return;
        let t;
        Object.defineProperty(globalThis, e, {
          get: () => {
            if (is_nullish(t)) {
              const n = new Error().stack,
                r = n ? n.substr(n.indexOf("\n", 8) + 1) : "";
              console.warn(
                `global ${e} is obsolete, please use Module.${e} instead ${r}`
              ),
                (t = o());
            }
            return t;
          },
        });
      };
      (r.MONO = o.mono),
        (r.BINDING = o.binding),
        (r.INTERNAL = o.internal),
        e.isGlobal || (r.Module = n),
        t("cwrap", () => n.cwrap),
        t("addRunDependency", () => n.addRunDependency),
        t("removeRunDependency", () => n.removeRunDependency);
    }
    let s;
    return (
      r.getDotnetRuntime
        ? (s = r.getDotnetRuntime.__list)
        : ((r.getDotnetRuntime = (e) =>
            r.getDotnetRuntime.__list.getRuntime(e)),
          (r.getDotnetRuntime.__list = s = new RuntimeList())),
      s.registerRuntime(exportedAPI),
      configure_emscripten_startup(n, exportedAPI),
      "function" === typeof globalThis.importScripts
        ? exportedAPI.Module
        : exportedAPI
    );
  }
  const __initializeImportsAndExports = initializeImportsAndExports,
    __linker_exports = {
      mono_set_timeout: mono_set_timeout,
      mono_wasm_asm_loaded: mono_wasm_asm_loaded,
      mono_wasm_fire_debugger_agent_message:
        mono_wasm_fire_debugger_agent_message,
      mono_wasm_debugger_log: mono_wasm_debugger_log,
      mono_wasm_add_dbg_command_received: mono_wasm_add_dbg_command_received,
      schedule_background_exec: schedule_background_exec,
      mono_wasm_invoke_js: mono_wasm_invoke_js,
      mono_wasm_invoke_js_blazor: mono_wasm_invoke_js_blazor,
      mono_wasm_trace_logger: mono_wasm_trace_logger,
      mono_wasm_set_entrypoint_breakpoint: mono_wasm_set_entrypoint_breakpoint,
      mono_wasm_invoke_js_with_args_ref: mono_wasm_invoke_js_with_args_ref,
      mono_wasm_get_object_property_ref: mono_wasm_get_object_property_ref,
      mono_wasm_set_object_property_ref: mono_wasm_set_object_property_ref,
      mono_wasm_get_by_index_ref: mono_wasm_get_by_index_ref,
      mono_wasm_set_by_index_ref: mono_wasm_set_by_index_ref,
      mono_wasm_get_global_object_ref: mono_wasm_get_global_object_ref,
      mono_wasm_create_cs_owned_object_ref:
        mono_wasm_create_cs_owned_object_ref,
      mono_wasm_release_cs_owned_object: mono_wasm_release_cs_owned_object,
      mono_wasm_typed_array_to_array_ref: mono_wasm_typed_array_to_array_ref,
      mono_wasm_typed_array_copy_to_ref: mono_wasm_typed_array_copy_to_ref,
      mono_wasm_typed_array_from_ref: mono_wasm_typed_array_from_ref,
      mono_wasm_typed_array_copy_from_ref: mono_wasm_typed_array_copy_from_ref,
      mono_wasm_cancel_promise_ref: mono_wasm_cancel_promise_ref,
      mono_wasm_web_socket_open_ref: mono_wasm_web_socket_open_ref,
      mono_wasm_web_socket_send: mono_wasm_web_socket_send,
      mono_wasm_web_socket_receive: mono_wasm_web_socket_receive,
      mono_wasm_web_socket_close_ref: mono_wasm_web_socket_close_ref,
      mono_wasm_web_socket_abort: mono_wasm_web_socket_abort,
      mono_wasm_load_icu_data: mono_wasm_load_icu_data,
      mono_wasm_get_icudt_name: mono_wasm_get_icudt_name,
      dotnet_browser_can_use_subtle_crypto_impl:
        dotnet_browser_can_use_subtle_crypto_impl,
      dotnet_browser_simple_digest_hash: dotnet_browser_simple_digest_hash,
      dotnet_browser_sign: dotnet_browser_sign,
    },
    INTERNAL = {
      BINDING_ASM:
        "[System.Private.Runtime.InteropServices.JavaScript]System.Runtime.InteropServices.JavaScript.Runtime",
      call_static_method: call_static_method,
      mono_wasm_exit: wrapped_c_functions.mono_wasm_exit,
      mono_wasm_enable_on_demand_gc:
        wrapped_c_functions.mono_wasm_enable_on_demand_gc,
      mono_profiler_init_aot: wrapped_c_functions.mono_profiler_init_aot,
      mono_wasm_set_runtime_options: mono_wasm_set_runtime_options,
      mono_wasm_exec_regression: wrapped_c_functions.mono_wasm_exec_regression,
      mono_method_resolve: mono_method_resolve,
      mono_bind_static_method: mono_bind_static_method,
      mono_intern_string: mono_intern_string,
      logging: void 0,
      mono_wasm_symbolicate_string: mono_wasm_symbolicate_string,
      mono_wasm_stringify_as_error_with_stack:
        mono_wasm_stringify_as_error_with_stack,
      mono_wasm_get_loaded_files: mono_wasm_get_loaded_files,
      mono_wasm_send_dbg_command_with_parms:
        mono_wasm_send_dbg_command_with_parms,
      mono_wasm_send_dbg_command: mono_wasm_send_dbg_command,
      mono_wasm_get_dbg_command_info: mono_wasm_get_dbg_command_info,
      mono_wasm_get_details: mono_wasm_get_details,
      mono_wasm_release_object: mono_wasm_release_object,
      mono_wasm_call_function_on: mono_wasm_call_function_on,
      mono_wasm_debugger_resume: mono_wasm_debugger_resume,
      mono_wasm_detach_debugger: mono_wasm_detach_debugger,
      mono_wasm_raise_debug_event: mono_wasm_raise_debug_event,
      mono_wasm_change_debugger_log_level: mono_wasm_change_debugger_log_level,
      mono_wasm_debugger_attached: mono_wasm_debugger_attached,
      mono_wasm_runtime_is_ready: runtimeHelpers.mono_wasm_runtime_is_ready,
    };
  class RuntimeList {
    constructor() {
      this.list = {};
    }
    registerRuntime(e) {
      return (
        (e.RuntimeId = Object.keys(this.list).length),
        (this.list[e.RuntimeId] = create_weak_ref(e)),
        e.RuntimeId
      );
    }
    getRuntime(e) {
      const o = this.list[e];
      return o ? o.deref() : void 0;
    }
  }
  return (
    (exports.__initializeImportsAndExports = __initializeImportsAndExports),
    (exports.__linker_exports = __linker_exports),
    Object.defineProperty(exports, "__esModule", { value: true }),
    exports
  );
})({});
