(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-crm-module~home-home-module"],{

/***/ "./node_modules/@angular/forms/fesm5/forms.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/forms/fesm5/forms.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_bg, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_s, AbstractControlDirective, AbstractFormGroupDirective, CheckboxControlValueAccessor, ControlContainer, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, DefaultValueAccessor, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, RadioControlValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, FormArrayName, FormGroupName, NgSelectOption, SelectControlValueAccessor, SelectMultipleControlValueAccessor, CheckboxRequiredValidator, EmailValidator, MaxLengthValidator, MinLengthValidator, PatternValidator, RequiredValidator, FormBuilder, AbstractControl, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS, Validators, VERSION, FormsModule, ReactiveFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function() { return InternalFormsSharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function() { return REACTIVE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function() { return SHARED_FORM_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function() { return TEMPLATE_DRIVEN_DIRECTIVES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function() { return AbstractControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function() { return ngControlStatusHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function() { return formDirectiveProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function() { return formControlBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function() { return modelGroupProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bg", function() { return NgNoValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function() { return NUMBER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function() { return NumberValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function() { return RADIO_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function() { return RadioControlRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function() { return RANGE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bf", function() { return RangeValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function() { return NG_MODEL_WITH_FORM_CONTROL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function() { return formControlBinding$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function() { return controlNameBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function() { return formDirectiveProvider$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function() { return formArrayNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function() { return formGroupNameProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function() { return SELECT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function() { return NgSelectMultipleOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function() { return SELECT_MULTIPLE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function() { return CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function() { return EMAIL_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function() { return MAX_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function() { return MIN_LENGTH_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function() { return PATTERN_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function() { return REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function() { return AbstractControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function() { return AbstractFormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function() { return CheckboxControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlContainer", function() { return ControlContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function() { return NG_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function() { return COMPOSITION_BUFFER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function() { return DefaultValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControl", function() { return NgControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatus", function() { return NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function() { return NgControlStatusGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForm", function() { return NgForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModel", function() { return NgModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgModelGroup", function() { return NgModelGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function() { return RadioControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlDirective", function() { return FormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlName", function() { return FormControlName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function() { return FormGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayName", function() { return FormArrayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupName", function() { return FormGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSelectOption", function() { return NgSelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function() { return SelectControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function() { return SelectMultipleControlValueAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function() { return CheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function() { return MaxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function() { return MinLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatternValidator", function() { return PatternValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredValidator", function() { return RequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return FormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractControl", function() { return AbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArray", function() { return FormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return FormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return FormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function() { return NG_ASYNC_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function() { return NG_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModule", function() { return FormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function() { return ReactiveFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v6.1.4
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Base class for control directives.
 *
 * Only used internally in the forms module.
 *
 *
 */
var AbstractControlDirective = /** @class */ (function () {
    function AbstractControlDirective() {
    }
    Object.defineProperty(AbstractControlDirective.prototype, "value", {
        /** The value of the control. */
        get: function () { return this.control ? this.control.value : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
        /**
         * A control is `valid` when its `status === VALID`.
         *
         * In order to have this status, the control must have passed all its
         * validation checks.
         */
        get: function () { return this.control ? this.control.valid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status === INVALID`.
         *
         * In order to have this status, the control must have failed
         * at least one of its validation checks.
         */
        get: function () { return this.control ? this.control.invalid : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
        /**
         * A control is `pending` when its `status === PENDING`.
         *
         * In order to have this status, the control must be in the
         * middle of conducting a validation check.
         */
        get: function () { return this.control ? this.control.pending : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status === DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         */
        get: function () { return this.control ? this.control.disabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status !== DISABLED`.
         *
         * In other words, it has a status of `VALID`, `INVALID`, or
         * `PENDING`.
         */
        get: function () { return this.control ? this.control.enabled : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
        /**
         * Returns any errors generated by failing validation. If there
         * are no errors, it will return null.
         */
        get: function () { return this.control ? this.control.errors : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         */
        get: function () { return this.control ? this.control.pristine : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * Note that programmatic changes to a control's value will
         * *not* mark it dirty.
         */
        get: function () { return this.control ? this.control.dirty : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
        /**
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        get: function () { return this.control ? this.control.touched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "status", {
        get: function () { return this.control ? this.control.status : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
        /**
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         */
        get: function () { return this.control ? this.control.untouched : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
        /**
         * Emits an event every time the validation status of the control
         * is re-calculated.
         */
        get: function () {
            return this.control ? this.control.statusChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
        /**
         * Emits an event every time the value of the control changes, in
         * the UI or programmatically.
         */
        get: function () {
            return this.control ? this.control.valueChanges : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlDirective.prototype, "path", {
        /**
         * Returns an array that represents the path from the top-level form
         * to this control. Each index is the string name of the control on
         * that level.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /**
     * Resets the form control. This means by default:
     *
     * * it is marked as `pristine`
     * * it is marked as `untouched`
     * * value is set to null
     *
     * For more information, see `AbstractControl`.
     */
    AbstractControlDirective.prototype.reset = function (value) {
        if (value === void 0) { value = undefined; }
        if (this.control)
            this.control.reset(value);
    };
    /**
     * Returns true if the control with the given path has the error specified. Otherwise
     * returns false.
     *
     * If no path is given, it checks for the error on the present control.
     */
    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
        return this.control ? this.control.hasError(errorCode, path) : false;
    };
    /**
     * Returns error data if the control with the given path has the error specified. Otherwise
     * returns null or undefined.
     *
     * If no path is given, it checks for the error on the present control.
     */
    AbstractControlDirective.prototype.getError = function (errorCode, path) {
        return this.control ? this.control.getError(errorCode, path) : null;
    };
    return AbstractControlDirective;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A directive that contains multiple `NgControl`s.
 *
 * Only used by the forms module.
 *
 *
 */
var ControlContainer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ControlContainer, _super);
    function ControlContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ControlContainer.prototype, "formDirective", {
        /**
         * Get the form to which this container belongs.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
        /**
         * Get the path to this container.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    return ControlContainer;
}(AbstractControlDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function isEmptyInputValue(value) {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
}
/**
 * @description
 * An `InjectionToken` for registering additional synchronous validators used with `AbstractControl`s.
 *
 * @see `NG_ASYNC_VALIDATORS`
 *
 * @usageNotes
 *
 * ### Providing a custom validator
 *
 * The following example registers a custom validator directive. Adding the validator to the
 * existing collection of validators requires the `multi: true` option.
 *
 * ```typescript
 * @Directive({
 *   selector: '[customValidator]',
 *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
 * })
 * class CustomValidatorDirective implements Validator {
 *   validate(control: AbstractControl): ValidationErrors | null {
 *     return { 'custom': true };
 *   }
 * }
 * ```
 *
 */
var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgValidators');
/**
 * @description
 * An `InjectionToken` for registering additional asynchronous validators used with `AbstractControl`s.
 *
 * @see `NG_VALIDATORS`
 *
 */
var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgAsyncValidators');
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * @description
 * Provides a set of built-in validators that can be used by form controls.
 *
 * A validator is a function that processes a `FormControl` or collection of
 * controls and returns an error map or null. A null map means that validation has passed.
 *
 * @see [Form Validation](/guide/form-validation)
 *
 */
var Validators = /** @class */ (function () {
    function Validators() {
    }
    /**
     * @description
     * Validator that requires the control's value to be greater than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a minimum of 3
     *
     * ```typescript
     * const control = new FormControl(2, Validators.min(3));
     *
     * console.log(control.errors); // {min: {min: 3, actual: 2}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `min` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.min = function (min) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
            return !isNaN(value) && value < min ? { 'min': { 'min': min, 'actual': control.value } } : null;
        };
    };
    /**
     * @description
     * Validator that requires the control's value to be less than or equal to the provided number.
     * The validator exists only as a function and not as a directive.
     *
     * @usageNotes
     *
     * ### Validate against a maximum of 15
     *
     * ```typescript
     * const control = new FormControl(16, Validators.max(15));
     *
     * console.log(control.errors); // {max: {max: 15, actual: 16}}
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `max` property if the validation check fails, otherwise `null`.
     *
     */
    Validators.max = function (max) {
        return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = parseFloat(control.value);
            // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max
            return !isNaN(value) && value > max ? { 'max': { 'max': max, 'actual': control.value } } : null;
        };
    };
    /**
     * @description
     * Validator that requires the control have a non-empty value.
     *
     * @usageNotes
     *
     * ### Validate that the field is non-empty
     *
     * ```typescript
     * const control = new FormControl('', Validators.required);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map with the `required` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.required = function (control) {
        return isEmptyInputValue(control.value) ? { 'required': true } : null;
    };
    /**
     * @description
     * Validator that requires the control's value be true. This validator is commonly
     * used for required checkboxes.
     *
     * @usageNotes
     *
     * ### Validate that the field value is true
     *
     * ```typescript
     * const control = new FormControl('', Validators.requiredTrue);
     *
     * console.log(control.errors); // {required: true}
     * ```
     *
     * @returns An error map that contains the `required` property
     * set to `true` if the validation check fails, otherwise `null`.
     */
    Validators.requiredTrue = function (control) {
        return control.value === true ? null : { 'required': true };
    };
    /**
     * @description
     * Validator that requires the control's value pass an email validation test.
     *
     * @usageNotes
     *
     * ### Validate that the field matches a valid email pattern
     *
     * ```typescript
     * const control = new FormControl('bad@', Validators.email);
     *
     * console.log(control.errors); // {email: true}
     * ```
     *
     * @returns An error map with the `email` property
     * if the validation check fails, otherwise `null`.
     *
     */
    Validators.email = function (control) {
        if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
        }
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    /**
     * @description
     * Validator that requires the length of the control's value to be greater than or equal
     * to the provided minimum length. This validator is also provided by default if you use the
     * the HTML5 `minlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has a minimum of 3 characters
     *
     * ```typescript
     * const control = new FormControl('ng', Validators.minLength(3));
     *
     * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
     * ```
     *
     * ```html
     * <input minlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `minlength` if the validation check fails, otherwise `null`.
     */
    Validators.minLength = function (minLength) {
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var length = control.value ? control.value.length : 0;
            return length < minLength ?
                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * @description
     * Validator that requires the length of the control's value to be less than or equal
     * to the provided maximum length. This validator is also provided by default if you use the
     * the HTML5 `maxlength` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field has maximum of 5 characters
     *
     * ```typescript
     * const control = new FormControl('Angular', Validators.maxLength(5));
     *
     * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
     * ```
     *
     * ```html
     * <input maxlength="5">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `maxlength` property if the validation check fails, otherwise `null`.
     */
    Validators.maxLength = function (maxLength) {
        return function (control) {
            var length = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
    };
    /**
     * @description
     * Validator that requires the control's value to match a regex pattern. This validator is also
     * provided
     * by default if you use the HTML5 `pattern` attribute.
     *
     * @usageNotes
     *
     * ### Validate that the field only contains letters or spaces
     *
     * ```typescript
     * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
     *
     * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
     * ```
     *
     * ```html
     * <input pattern="[a-zA-Z ]*">
     * ```
     *
     * @returns A validator function that returns an error map with the
     * `pattern` property if the validation check fails, otherwise `null`.
     */
    Validators.pattern = function (pattern) {
        if (!pattern)
            return Validators.nullValidator;
        var regex;
        var regexStr;
        if (typeof pattern === 'string') {
            regexStr = '';
            if (pattern.charAt(0) !== '^')
                regexStr += '^';
            regexStr += pattern;
            if (pattern.charAt(pattern.length - 1) !== '$')
                regexStr += '$';
            regex = new RegExp(regexStr);
        }
        else {
            regexStr = pattern.toString();
            regex = pattern;
        }
        return function (control) {
            if (isEmptyInputValue(control.value)) {
                return null; // don't validate empty values to allow optional controls
            }
            var value = control.value;
            return regex.test(value) ? null :
                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
        };
    };
    /**
     * @description
     * Validator that performs no operation.
     */
    Validators.nullValidator = function (c) { return null; };
    Validators.compose = function (validators) {
        if (!validators)
            return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
        };
    };
    /**
     * @description
     * Compose multiple async validators into a single function that returns the union
     * of the individual error objects for the provided control.
     *
     * @returns A validator function that returns an error map with the
     * merged error objects of the async validators if the validation check fails, otherwise `null`.
    */
    Validators.composeAsync = function (validators) {
        if (!validators)
            return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0)
            return null;
        return function (control) {
            var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
        };
    };
    return Validators;
}());
function isPresent(o) {
    return o != null;
}
function toObservable(r) {
    var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;
    if (!(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵisObservable"])(obs))) {
        throw new Error("Expected validator to return Promise or Observable.");
    }
    return obs;
}
function _executeValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _executeAsyncValidators(control, validators) {
    return validators.map(function (v) { return v(control); });
}
function _mergeErrors(arrayOfErrors) {
    var res = arrayOfErrors.reduce(function (res, errors) {
        return errors != null ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, res, errors) : res;
    }, {});
    return Object.keys(res).length === 0 ? null : res;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide a `ControlValueAccessor` for form controls.
 *
 * See `DefaultValueAccessor` for how to implement one.
 *
 */
var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgValueAccessor');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxControlValueAccessor; }),
    multi: true,
};
/**
 * The accessor for writing a value and listening to changes on a checkbox input element.
 *
 *  ### Example
 *  ```
 *  <input type="checkbox" name="rememberLogin" ngModel>
 *  ```
 *
 *
 */
var CheckboxControlValueAccessor = /** @class */ (function () {
    function CheckboxControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
    };
    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    CheckboxControlValueAccessor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
                    providers: [CHECKBOX_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    CheckboxControlValueAccessor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    return CheckboxControlValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var DEFAULT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DefaultValueAccessor; }),
    multi: true
};
/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid() {
    var userAgent = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["ɵgetDOM"])() ? Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["ɵgetDOM"])().getUserAgent() : '';
    return /android (\d+)/.test(userAgent.toLowerCase());
}
/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * @experimental
 */
var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CompositionEventMode');
/**
 * The default accessor for writing a value and listening to changes that is used by the
 * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *
 */
var DefaultValueAccessor = /** @class */ (function () {
    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        /** Whether the user is creating a composition string (IME events). */
        this._composing = false;
        if (this._compositionMode == null) {
            this._compositionMode = !_isAndroid();
        }
    }
    DefaultValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    DefaultValueAccessor.prototype._handleInput = function (value) {
        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
            this.onChange(value);
        }
    };
    /** @internal */
    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
    /** @internal */
    DefaultValueAccessor.prototype._compositionEnd = function (value) {
        this._composing = false;
        this._compositionMode && this.onChange(value);
    };
    DefaultValueAccessor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
                    // TODO: vsavkin replace the above selector with the one below it once
                    // https://github.com/angular/angular/issues/3011 is implemented
                    // selector: '[ngModel],[formControl],[formControlName]',
                    host: {
                        '(input)': '$any(this)._handleInput($event.target.value)',
                        '(blur)': 'onTouched()',
                        '(compositionstart)': '$any(this)._compositionStart()',
                        '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
                    },
                    providers: [DEFAULT_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    DefaultValueAccessor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [COMPOSITION_BUFFER_MODE,] }] }
    ]; };
    return DefaultValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeValidator(validator) {
    if (validator.validate) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}
function normalizeAsyncValidator(validator) {
    if (validator.validate) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NUMBER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NumberValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a number value and listening to changes that is used by the
 * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
 *
 *  ### Example
 *  ```
 *  <input type="number" [(ngModel)]="age">
 *  ```
 */
var NumberValueAccessor = /** @class */ (function () {
    function NumberValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    NumberValueAccessor.prototype.writeValue = function (value) {
        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
        var normalizedValue = value == null ? '' : value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    NumberValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    NumberValueAccessor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [NUMBER_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    NumberValueAccessor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    return NumberValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function unimplemented() {
    throw new Error('unimplemented');
}
/**
 * A base class that all control directive extend.
 * It binds a `FormControl` object to a DOM element.
 *
 * Used internally by Angular forms.
 *
 *
 */
var NgControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControl, _super);
    function NgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** @internal */
        _this._parent = null;
        _this.name = null;
        _this.valueAccessor = null;
        /** @internal */
        _this._rawValidators = [];
        /** @internal */
        _this._rawAsyncValidators = [];
        return _this;
    }
    Object.defineProperty(NgControl.prototype, "validator", {
        get: function () { return unimplemented(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgControl.prototype, "asyncValidator", {
        get: function () { return unimplemented(); },
        enumerable: true,
        configurable: true
    });
    return NgControl;
}(AbstractControlDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RADIO_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RadioControlValueAccessor; }),
    multi: true
};
/**
 * Internal class used by Angular to uncheck radio buttons with the matching name.
 */
var RadioControlRegistry = /** @class */ (function () {
    function RadioControlRegistry() {
        this._accessors = [];
    }
    RadioControlRegistry.prototype.add = function (control, accessor) {
        this._accessors.push([control, accessor]);
    };
    RadioControlRegistry.prototype.remove = function (accessor) {
        for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);
                return;
            }
        }
    };
    RadioControlRegistry.prototype.select = function (accessor) {
        var _this = this;
        this._accessors.forEach(function (c) {
            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
            }
        });
    };
    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
        if (!controlPair[0].control)
            return false;
        return controlPair[0]._parent === accessor._control._parent &&
            controlPair[1].name === accessor.name;
    };
    RadioControlRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return RadioControlRegistry;
}());
/**
 * @description
 *
 * Writes radio control values and listens to radio control changes.
 *
 * Used by `NgModel`, `FormControlDirective`, and `FormControlName`
 * to keep the view synced with the `FormControl` model.
 *
 * If you have imported the `FormsModule` or the `ReactiveFormsModule`, this
 * value accessor will be active on any radio control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use radio buttons with form directives
 *
 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
 * in the same group have the same `name` attribute.  Radio buttons with different `name`
 * attributes do not affect each other.
 *
 * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
 *
 * When using radio buttons in a reactive form, radio buttons in the same group should have the
 * same `formControlName`. You can also add a `name` attribute, but it's optional.
 *
 * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
 *
 *  * **npm package**: `@angular/forms`
 *
 *
 */
var RadioControlValueAccessor = /** @class */ (function () {
    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    RadioControlValueAccessor.prototype.ngOnInit = function () {
        this._control = this._injector.get(NgControl);
        this._checkName();
        this._registry.add(this._control, this);
    };
    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
    RadioControlValueAccessor.prototype.writeValue = function (value) {
        this._state = value === this.value;
        this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
    };
    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this._fn = fn;
        this.onChange = function () {
            fn(_this.value);
            _this._registry.select(_this);
        };
    };
    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    RadioControlValueAccessor.prototype._checkName = function () {
        if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
        }
        if (!this.name && this.formControlName)
            this.name = this.formControlName;
    };
    RadioControlValueAccessor.prototype._throwNameError = function () {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
    };
    RadioControlValueAccessor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
                    providers: [RADIO_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    RadioControlValueAccessor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: RadioControlRegistry },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    RadioControlValueAccessor.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        formControlName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return RadioControlValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RANGE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RangeValueAccessor; }),
    multi: true
};
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
 *
 *  ### Example
 *  ```
 *  <input type="range" [(ngModel)]="age" >
 *  ```
 */
var RangeValueAccessor = /** @class */ (function () {
    function RangeValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    RangeValueAccessor.prototype.writeValue = function (value) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
    };
    RangeValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
    };
    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    RangeValueAccessor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
                    host: {
                        '(change)': 'onChange($event.target.value)',
                        '(input)': 'onChange($event.target.value)',
                        '(blur)': 'onTouched()'
                    },
                    providers: [RANGE_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    RangeValueAccessor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    return RangeValueAccessor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var FormErrorExamples = {
    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var ReactiveErrors = /** @class */ (function () {
    function ReactiveErrors() {
    }
    ReactiveErrors.controlParentException = function () {
        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
    };
    ReactiveErrors.ngModelGroupException = function () {
        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
    };
    ReactiveErrors.missingFormException = function () {
        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
    };
    ReactiveErrors.groupParentException = function () {
        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
    };
    ReactiveErrors.arrayParentException = function () {
        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
    };
    ReactiveErrors.disabledAttrWarning = function () {
        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
    };
    ReactiveErrors.ngModelWarning = function (directiveName) {
        console.warn("\n    It looks like you're using ngModel on the same form field as " + directiveName + ". \n    Support for using the ngModel input property and ngModelChange event with \n    reactive form directives has been deprecated in Angular v6 and will be removed \n    in Angular v7.\n    \n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/" + (directiveName === 'formControl' ? 'FormControlDirective'
            : 'FormControlName') + "#use-with-ngmodel\n    ");
    };
    return ReactiveErrors;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectControlValueAccessor; }),
    multi: true
};
function _buildValueString(id, value) {
    if (id == null)
        return "" + value;
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
function _extractId(valueString) {
    return valueString.split(':')[0];
}
/**
 * @description
 *
 * Writes values and listens to changes on a select element.
 *
 * Used by `NgModel`, `FormControlDirective`, and `FormControlName`
 * to keep the view synced with the `FormControl` model.
 *
 * If you have imported the `FormsModule` or the `ReactiveFormsModule`, this
 * value accessor will be active on any select control that has a form directive. You do
 * **not** need to add a special selector to activate it.
 *
 * ### How to use select controls with form directives
 *
 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
 * attribute to the main `<select>` tag.
 *
 * If your option values are simple strings, you can bind to the normal `value` property
 * on the option.  If your option values happen to be objects (and you'd like to save the
 * selection in your form as an object), use `ngValue` instead:
 *
 * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
 *
 * In reactive forms, you'll also want to add your form directive (`formControlName` or
 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
 * choice of binding to the  `value` or `ngValue` property on the select's options.
 *
 * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
 *
 * ### Caveat: Option selection
 *
 * Angular uses object identity to select option. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects option by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 * Note: We listen to the 'change' event because 'input' events aren't fired
 * for selects in Firefox and IE:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
 *
 * * **npm package**: `@angular/forms`
 *
 *
 */
var SelectControlValueAccessor = /** @class */ (function () {
    function SelectControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    SelectControlValueAccessor.prototype.writeValue = function (value) {
        this.value = value;
        var id = this._getOptionId(value);
        if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
        }
        var valueString = _buildValueString(id, value);
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
    };
    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (valueString) {
            _this.value = _this._getOptionValue(valueString);
            fn(_this.value);
        };
    };
    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
    /** @internal */
    SelectControlValueAccessor.prototype._getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this._compareWith(this._optionMap.get(id), value))
                    return id;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /** @internal */
    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var id = _extractId(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
    };
    SelectControlValueAccessor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
                    providers: [SELECT_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    SelectControlValueAccessor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    SelectControlValueAccessor.propDecorators = {
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return SelectControlValueAccessor;
}());
/**
 * @description
 *
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * See docs for `SelectControlValueAccessor` for usage examples.
 *
 *
 */
var NgSelectOption = /** @class */ (function () {
    function NgSelectOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select)
            this.id = this._select._registerOption();
    }
    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
        set: function (value) {
            if (this._select == null)
                return;
            this._select._optionMap.set(this.id, value);
            this._setElementValue(_buildValueString(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectOption.prototype, "value", {
        set: function (value) {
            this._setElementValue(value);
            if (this._select)
                this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSelectOption.prototype._setElementValue = function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    NgSelectOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    NgSelectOption.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: 'option' },] }
    ];
    /** @nocollapse */
    NgSelectOption.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: SelectControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
    ]; };
    NgSelectOption.propDecorators = {
        ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngValue',] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['value',] }]
    };
    return NgSelectOption;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return SelectMultipleControlValueAccessor; }),
    multi: true
};
function _buildValueString$1(id, value) {
    if (id == null)
        return "" + value;
    if (typeof value === 'string')
        value = "'" + value + "'";
    if (value && typeof value === 'object')
        value = 'Object';
    return (id + ": " + value).slice(0, 50);
}
function _extractId$1(valueString) {
    return valueString.split(':')[0];
}
/**
 * The accessor for writing a value and listening to changes on a select element.
 *
 *  ### Caveat: Options selection
 *
 * Angular uses object identity to select options. It's possible for the identities of items
 * to change while the data does not. This can happen, for example, if the items are produced
 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
 * second response will produce objects with different identities.
 *
 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
 * If `compareWith` is given, Angular selects options by the return value of the function.
 *
 * #### Syntax
 *
 * ```
 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
 *     <option *ngFor="let country of countries" [ngValue]="country">
 *         {{country.name}}
 *     </option>
 * </select>
 *
 * compareFn(c1: Country, c2: Country): boolean {
 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
 * }
 * ```
 *
 *
 */
var SelectMultipleControlValueAccessor = /** @class */ (function () {
    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */
        this._optionMap = new Map();
        /** @internal */
        this._idCounter = 0;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._compareWith = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"];
    }
    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
        set: function (fn) {
            if (typeof fn !== 'function') {
                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
            }
            this._compareWith = fn;
        },
        enumerable: true,
        configurable: true
    });
    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
        var _this = this;
        this.value = value;
        var optionSelectedStateSetter;
        if (Array.isArray(value)) {
            // convert values to ids
            var ids_1 = value.map(function (v) { return _this._getOptionId(v); });
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
        }
        else {
            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
        }
        this._optionMap.forEach(optionSelectedStateSetter);
    };
    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
        var _this = this;
        this.onChange = function (_) {
            var selected = [];
            if (_.hasOwnProperty('selectedOptions')) {
                var options = _.selectedOptions;
                for (var i = 0; i < options.length; i++) {
                    var opt = options.item(i);
                    var val = _this._getOptionValue(opt.value);
                    selected.push(val);
                }
            }
            // Degrade on IE
            else {
                var options = _.options;
                for (var i = 0; i < options.length; i++) {
                    var opt = options.item(i);
                    if (opt.selected) {
                        var val = _this._getOptionValue(opt.value);
                        selected.push(val);
                    }
                }
            }
            _this.value = selected;
            fn(selected);
        };
    };
    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
        var id = (this._idCounter++).toString();
        this._optionMap.set(id, value);
        return id;
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Array.from(this._optionMap.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                if (this._compareWith(this._optionMap.get(id)._value, value))
                    return id;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    /** @internal */
    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
        var id = _extractId$1(valueString);
        return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
    };
    SelectMultipleControlValueAccessor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
                    host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
                    providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    SelectMultipleControlValueAccessor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    SelectMultipleControlValueAccessor.propDecorators = {
        compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return SelectMultipleControlValueAccessor;
}());
/**
 * Marks `<option>` as dynamic, so Angular can be notified when options change.
 *
 * ### Example
 *
 * ```
 * <select multiple name="city" ngModel>
 *   <option *ngFor="let c of cities" [value]="c"></option>
 * </select>
 * ```
 */
var NgSelectMultipleOption = /** @class */ (function () {
    function NgSelectMultipleOption(_element, _renderer, _select) {
        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) {
            this.id = this._select._registerOption(this);
        }
    }
    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
        set: function (value) {
            if (this._select == null)
                return;
            this._value = value;
            this._setElementValue(_buildValueString$1(this.id, value));
            this._select.writeValue(this._select.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
        set: function (value) {
            if (this._select) {
                this._value = value;
                this._setElementValue(_buildValueString$1(this.id, value));
                this._select.writeValue(this._select.value);
            }
            else {
                this._setElementValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    NgSelectMultipleOption.prototype._setElementValue = function (value) {
        this._renderer.setProperty(this._element.nativeElement, 'value', value);
    };
    /** @internal */
    NgSelectMultipleOption.prototype._setSelected = function (selected) {
        this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
    };
    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
        if (this._select) {
            this._select._optionMap.delete(this.id);
            this._select.writeValue(this._select.value);
        }
    };
    NgSelectMultipleOption.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: 'option' },] }
    ];
    /** @nocollapse */
    NgSelectMultipleOption.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] }
    ]; };
    NgSelectMultipleOption.propDecorators = {
        ngValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngValue',] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['value',] }]
    };
    return NgSelectMultipleOption;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function controlPath(name, parent) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(parent.path, [name]);
}
function setUpControl(control, dir) {
    if (!control)
        _throwError(dir, 'Cannot find control with');
    if (!dir.valueAccessor)
        _throwError(dir, 'No value accessor for form control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    dir.valueAccessor.writeValue(control.value);
    setUpViewChangePipeline(control, dir);
    setUpModelChangePipeline(control, dir);
    setUpBlurPipeline(control, dir);
    if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
    }
    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange)
            validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
    });
}
function cleanUpControl(control, dir) {
    dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
    dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
    dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
            validator.registerOnValidatorChange(null);
        }
    });
    if (control)
        control._clearChangeFns();
}
function setUpViewChangePipeline(control, dir) {
    dir.valueAccessor.registerOnChange(function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change')
            updateControl(control, dir);
    });
}
function setUpBlurPipeline(control, dir) {
    dir.valueAccessor.registerOnTouched(function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange)
            updateControl(control, dir);
        if (control.updateOn !== 'submit')
            control.markAsTouched();
    });
}
function updateControl(control, dir) {
    if (control._pendingDirty)
        control.markAsDirty();
    control.setValue(control._pendingValue, { emitModelToViewChange: false });
    dir.viewToModelUpdate(control._pendingValue);
    control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
    control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue);
        // control -> ngModel
        if (emitModelEvent)
            dir.viewToModelUpdate(newValue);
    });
}
function setUpFormContainer(control, dir) {
    if (control == null)
        _throwError(dir, 'Cannot find control with');
    control.validator = Validators.compose([control.validator, dir.validator]);
    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
}
function _noControlError(dir) {
    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
}
function _throwError(dir, message) {
    var messageEnd;
    if (dir.path.length > 1) {
        messageEnd = "path: '" + dir.path.join(' -> ') + "'";
    }
    else if (dir.path[0]) {
        messageEnd = "name: '" + dir.path + "'";
    }
    else {
        messageEnd = 'unspecified name attribute';
    }
    throw new Error(message + " " + messageEnd);
}
function composeValidators(validators) {
    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
}
function composeAsyncValidators(validators) {
    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
        null;
}
function isPropertyUpdated(changes, viewModel) {
    if (!changes.hasOwnProperty('model'))
        return false;
    var change = changes['model'];
    if (change.isFirstChange())
        return true;
    return !Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵlooseIdentical"])(viewModel, change.currentValue);
}
var BUILTIN_ACCESSORS = [
    CheckboxControlValueAccessor,
    RangeValueAccessor,
    NumberValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
];
function isBuiltInAccessor(valueAccessor) {
    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
}
function syncPendingControls(form, directives) {
    form._syncPendingControls();
    directives.forEach(function (dir) {
        var control = dir.control;
        if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
        }
    });
}
// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
function selectValueAccessor(dir, valueAccessors) {
    if (!valueAccessors)
        return null;
    if (!Array.isArray(valueAccessors))
        _throwError(dir, 'Value accessor was not provided as an array for form control with');
    var defaultAccessor = undefined;
    var builtinAccessor = undefined;
    var customAccessor = undefined;
    valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
            defaultAccessor = v;
        }
        else if (isBuiltInAccessor(v)) {
            if (builtinAccessor)
                _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
        }
        else {
            if (customAccessor)
                _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
        }
    });
    if (customAccessor)
        return customAccessor;
    if (builtinAccessor)
        return builtinAccessor;
    if (defaultAccessor)
        return defaultAccessor;
    _throwError(dir, 'No valid value accessor for form control with');
    return null;
}
function removeDir(list, el) {
    var index = list.indexOf(el);
    if (index > -1)
        list.splice(index, 1);
}
// TODO(kara): remove after deprecation period
function _ngModelWarning(name, type, instance, warningConfig) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() || warningConfig === 'never')
        return;
    if (((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce) ||
        (warningConfig === 'always' && !instance._ngModelWarningSent)) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This is a base class for code shared between `NgModelGroup` and `FormGroupName`.
 *
 *
 */
var AbstractFormGroupDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AbstractFormGroupDirective, _super);
    function AbstractFormGroupDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractFormGroupDirective.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormGroup(this);
    };
    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
        }
    };
    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
        /**
         * Get the `FormGroup` backing this binding.
         */
        get: function () { return this.formDirective.getFormGroup(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
        /**
         * Get the path to this control group.
         */
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
        /**
         * Get the `Form` to which this group belongs.
         */
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    AbstractFormGroupDirective.prototype._checkParentType = function () { };
    return AbstractFormGroupDirective;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var AbstractControlStatus = /** @class */ (function () {
    function AbstractControlStatus(cd) {
        this._cd = cd;
    }
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
        get: function () { return this._cd.control ? this._cd.control.touched : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
        get: function () { return this._cd.control ? this._cd.control.valid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
        get: function () { return this._cd.control ? this._cd.control.pending : false; },
        enumerable: true,
        configurable: true
    });
    return AbstractControlStatus;
}());
var ngControlStatusHost = {
    '[class.ng-untouched]': 'ngClassUntouched',
    '[class.ng-touched]': 'ngClassTouched',
    '[class.ng-pristine]': 'ngClassPristine',
    '[class.ng-dirty]': 'ngClassDirty',
    '[class.ng-valid]': 'ngClassValid',
    '[class.ng-invalid]': 'ngClassInvalid',
    '[class.ng-pending]': 'ngClassPending',
};
/**
 * Directive automatically applied to Angular form controls that sets CSS classes
 * based on control status. The following classes are applied as the properties
 * become true:
 *
 * * ng-valid
 * * ng-invalid
 * * ng-pending
 * * ng-pristine
 * * ng-dirty
 * * ng-untouched
 * * ng-touched
 *
 *
 */
var NgControlStatus = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControlStatus, _super);
    function NgControlStatus(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] }
    ];
    /** @nocollapse */
    NgControlStatus.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] }
    ]; };
    return NgControlStatus;
}(AbstractControlStatus));
/**
 * Directive automatically applied to Angular form groups that sets CSS classes
 * based on control status (valid/invalid/dirty/etc).
 *
 *
 */
var NgControlStatusGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgControlStatusGroup, _super);
    function NgControlStatusGroup(cd) {
        return _super.call(this, cd) || this;
    }
    NgControlStatusGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
                    host: ngControlStatusHost
                },] }
    ];
    /** @nocollapse */
    NgControlStatusGroup.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] }
    ]; };
    return NgControlStatusGroup;
}(AbstractControlStatus));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Reports that a FormControl is valid, meaning that no errors exist in the input value.
 *
 * @see `status`
 */
var VALID = 'VALID';
/**
 * Reports that a FormControl is invalid, meaning that an error exists in the input value.
 *
 * @see `status`
 */
var INVALID = 'INVALID';
/**
 * Reports that a FormControl is pending, meaning that that async validation is occurring and
 * errors are not yet available for the input value.
 *
 * @see `markAsPending`
 * @see `status`
 */
var PENDING = 'PENDING';
/**
 * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
 * calculations of validity or value.
 *
 * @see `markAsDisabled`
 * @see `status`
 */
var DISABLED = 'DISABLED';
function _find(control, path, delimiter) {
    if (path == null)
        return null;
    if (!(path instanceof Array)) {
        path = path.split(delimiter);
    }
    if (path instanceof Array && (path.length === 0))
        return null;
    return path.reduce(function (v, name) {
        if (v instanceof FormGroup) {
            return v.controls.hasOwnProperty(name) ? v.controls[name] : null;
        }
        if (v instanceof FormArray) {
            return v.at(name) || null;
        }
        return null;
    }, control);
}
function coerceToValidator(validatorOrOpts) {
    var validator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators :
        validatorOrOpts);
    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
    var origAsyncValidator = (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators :
        asyncValidator);
    return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) :
        origAsyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
    return validatorOrOpts != null && !Array.isArray(validatorOrOpts) &&
        typeof validatorOrOpts === 'object';
}
/**
 * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
 *
 * It provides some of the shared behavior that all controls and groups of controls have, like
 * running validators, calculating status, and resetting state. It also defines the properties
 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
 * instantiated directly.
 *
 * @see [Forms Guide](/guide/forms)
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 * @see [Dynamic Forms Guide](/guide/dynamic-form)
 *
 */
var AbstractControl = /** @class */ (function () {
    /**
     * Initialize the AbstractControl instance.
     *
     * @param validator The function that determines the synchronous validity of this control.
     * @param asyncValidator The function that determines the asynchronous validity of this
     * control.
     */
    function AbstractControl(validator, asyncValidator) {
        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /** @internal */
        this._onCollectionChange = function () { };
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */
        this.touched = false;
        /** @internal */
        this._onDisabledChange = [];
    }
    Object.defineProperty(AbstractControl.prototype, "parent", {
        /**
         * The parent control.
         */
        get: function () { return this._parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "valid", {
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see `status`
         *
         * @returns True if the control has passed all of its validation tests,
         * false otherwise.
         */
        get: function () { return this.status === VALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "invalid", {
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see `status`
         *
         * @returns True if this control has failed one or more of its validation checks,
         * false otherwise.
         */
        get: function () { return this.status === INVALID; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "pending", {
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see `status`
         *
         * @returns True if this control is in the process of conducting a validation check,
         * false otherwise.
         */
        get: function () { return this.status == PENDING; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "disabled", {
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * @see `status`
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @returns True if the control is disabled, false otherwise.
         */
        get: function () { return this.status === DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "enabled", {
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @see `status`
         *
         * @returns True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         */
        get: function () { return this.status !== DISABLED; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "dirty", {
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */
        get: function () { return !this.pristine; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "untouched", {
        /**
         * True if the control has not been marked as touched
         *
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         */
        get: function () { return !this.touched; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractControl.prototype, "updateOn", {
        /**
         * Reports the update strategy of the `AbstractControl` (meaning
         * the event on which the control updates itself).
         * Possible values: `'change'` | `'blur'` | `'submit'`
         * Default value: `'change'`
         */
        get: function () {
            return this._updateOn ? this._updateOn : (this.parent ? this.parent.updateOn : 'change');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the synchronous validators that are active on this control.  Calling
     * this overwrites any existing sync validators.
     */
    AbstractControl.prototype.setValidators = function (newValidator) {
        this.validator = coerceToValidator(newValidator);
    };
    /**
     * Sets the async validators that are active on this control. Calling this
     * overwrites any existing async validators.
     */
    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
        this.asyncValidator = coerceToAsyncValidator(newValidator);
    };
    /**
     * Empties out the sync validator list.
     */
    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
    /**
     * Empties out the async validator list.
     */
    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
    /**
     * Marks the control as `touched`. A control is touched by focus and
     * blur events that do not change the value; compare `markAsDirty`;
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = true;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
        }
    };
    /**
     * Marks the control as `untouched`.
     *
     * If the control has any children, also marks all children as `untouched`
     * and recalculates the `touched` status of all parent controls.
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events after the marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsUntouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = false;
        this._pendingTouched = false;
        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /**
     * Marks the control as `dirty`. A control becomes dirty when
     * the control's is changed through the UI; compare `markAsTouched`.
     *
     *  @param opts Configuration options that determine how the control propagates changes
     * and emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false.
     */
    AbstractControl.prototype.markAsDirty = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = false;
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
        }
    };
    /**
     * Marks the control as `pristine`.
     *
     * If the control has any children, marks all children as `pristine`,
     * and recalculates the `pristine` status of all parent
     * controls.
     *
     *  @param opts Configuration options that determine how the control emits events after
     * marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     */
    AbstractControl.prototype.markAsPristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = true;
        this._pendingDirty = false;
        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /**
     * Marks the control as `pending`.
     *
     * A control is pending while the control performs async validation.
     *
     *  @param opts Configuration options that determine how the control propagates changes and
     * emits events after marking is applied.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
     * observable emits an event with the latest status the control is marked pending.
     * When false, no events are emitted.
     *
     */
    AbstractControl.prototype.markAsPending = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = PENDING;
        if (opts.emitEvent !== false) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
        }
    };
    /**
     * Disables the control. This means the control is exempt from validation checks and
     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
     *
     * If the control has children, all children are also disabled.
     *
     *  @param opts Configuration options that determine how the control propagates
     * changes and emits events after the control is disabled.
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is disabled.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.disable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = DISABLED;
        this.errors = null;
        this._forEachChild(function (control) { control.disable(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts, { onlySelf: true })); });
        this._updateValue();
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
    };
    /**
     * Enables the control. This means the control is included in validation checks and
     * the aggregate value of its parent. Its status recalculates based on its value and
     * its validators.
     *
     * By default, if the control has children, all children are enabled.
     *
     *  @param opts Configure options that control how the control propagates changes and
     * emits events when marked as untouched
     * * `onlySelf`: When true, mark only this control. When false or not supplied,
     * marks all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is enabled.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.enable = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.status = VALID;
        this._forEachChild(function (control) { control.enable(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, opts, { onlySelf: true })); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
        this._updateAncestors(opts);
        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
    };
    AbstractControl.prototype._updateAncestors = function (opts) {
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
            this._parent._updatePristine();
            this._parent._updateTouched();
        }
    };
    /**
     * @param parent Sets the parent of the control
     */
    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
    /**
     * Recalculates the value and validation status of the control.
     *
     * By default, it also updates the value and validity of its ancestors.
     *
     * @param opts Configuration options determine how the control propagates changes and emits events
     * after updates and validity checks are applied.
     * * `onlySelf`: When true, only update this control. When false or not supplied,
     * update all direct ancestors. Default is false..
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is updated.
     * When false, no events are emitted.
     */
    AbstractControl.prototype.updateValueAndValidity = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._setInitialStatus();
        this._updateValue();
        if (this.enabled) {
            this._cancelExistingSubscription();
            this.errors = this._runValidator();
            this.status = this._calculateStatus();
            if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
            }
        }
        if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
        }
        if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._updateTreeValidity = function (opts) {
        if (opts === void 0) { opts = { emitEvent: true }; }
        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity(opts); });
        this.updateValueAndValidity({ onlySelf: true, emitEvent: opts.emitEvent });
    };
    AbstractControl.prototype._setInitialStatus = function () {
        this.status = this._allControlsDisabled() ? DISABLED : VALID;
    };
    AbstractControl.prototype._runValidator = function () {
        return this.validator ? this.validator(this) : null;
    };
    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
        var _this = this;
        if (this.asyncValidator) {
            this.status = PENDING;
            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription =
                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
        }
    };
    AbstractControl.prototype._cancelExistingSubscription = function () {
        if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
        }
    };
    /**
     * Sets errors on a form control when running validations manually, rather than automatically.
     *
     * Calling `setErrors` also updates the validity of the parent control.
     *
     * ### Manually set the errors for a control
     *
     * ```
     * const login = new FormControl('someLogin');
     * login.setErrors({
     *   notUnique: true
     * });
     *
     * expect(login.valid).toEqual(false);
     * expect(login.errors).toEqual({ notUnique: true });
     *
     * login.setValue('someOtherLogin');
     *
     * expect(login.valid).toEqual(true);
     * ```
     */
    AbstractControl.prototype.setErrors = function (errors, opts) {
        if (opts === void 0) { opts = {}; }
        this.errors = errors;
        this._updateControlsErrors(opts.emitEvent !== false);
    };
    /**
     * Retrieves a child control given the control's name or path.
     *
     * @param path A dot-delimited string or array of string/number values that define the path to the
     * control.
     *
     * ### Retrieve a nested control
     *
     * For example, to get a `name` control nested within a `person` sub-group:
     *
     * * `this.form.get('person.name');`
     *
     * -OR-
     *
     * * `this.form.get(['person', 'name']);`
     */
    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
    /**
     * Reports error data for a specific error occurring in this control or in another control.
     *
     * @param errorCode The error code for which to retrieve data
     * @param path The path to a control to check. If not supplied, checks for the error in this
     * control.
     *
     * @returns The error data if the control with the given path has the given error, otherwise null
     * or undefined.
     */
    AbstractControl.prototype.getError = function (errorCode, path) {
        var control = path ? this.get(path) : this;
        return control && control.errors ? control.errors[errorCode] : null;
    };
    /**
     * Reports whether the control with the given path has the error specified.
     *
     * @param errorCode The error code for which to retrieve data
     * @param path The path to a control to check. If not supplied, checks for the error in this
     * control.
     * @returns True when the control with the given path has the error, otherwise false.
     */
    AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
    Object.defineProperty(AbstractControl.prototype, "root", {
        /**
         * Retrieves the top-level ancestor of this control.
         */
        get: function () {
            var x = this;
            while (x._parent) {
                x = x._parent;
            }
            return x;
        },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
        this.status = this._calculateStatus();
        if (emitEvent) {
            this.statusChanges.emit(this.status);
        }
        if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
        }
    };
    /** @internal */
    AbstractControl.prototype._initObservables = function () {
        this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    };
    AbstractControl.prototype._calculateStatus = function () {
        if (this._allControlsDisabled())
            return DISABLED;
        if (this.errors)
            return INVALID;
        if (this._anyControlsHaveStatus(PENDING))
            return PENDING;
        if (this._anyControlsHaveStatus(INVALID))
            return INVALID;
        return VALID;
    };
    /** @internal */
    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
        return this._anyControls(function (control) { return control.status === status; });
    };
    /** @internal */
    AbstractControl.prototype._anyControlsDirty = function () {
        return this._anyControls(function (control) { return control.dirty; });
    };
    /** @internal */
    AbstractControl.prototype._anyControlsTouched = function () {
        return this._anyControls(function (control) { return control.touched; });
    };
    /** @internal */
    AbstractControl.prototype._updatePristine = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.pristine = !this._anyControlsDirty();
        if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._updateTouched = function (opts) {
        if (opts === void 0) { opts = {}; }
        this.touched = this._anyControlsTouched();
        if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
        }
    };
    /** @internal */
    AbstractControl.prototype._isBoxedValue = function (formState) {
        return typeof formState === 'object' && formState !== null &&
            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
    };
    /** @internal */
    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
    /** @internal */
    AbstractControl.prototype._setUpdateStrategy = function (opts) {
        if (isOptionsObj(opts) && opts.updateOn != null) {
            this._updateOn = opts.updateOn;
        }
    };
    return AbstractControl;
}());
/**
 * Tracks the value and validation status of an individual form control.
 *
 * This is one of the three fundamental building blocks of Angular forms, along with
 * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
 * implements most of the base functionality for accessing the value, validation status,
 * user interactions and events.
 *
 * @see `AbstractControl`
 * @see [Reactive Forms Guide](guide/reactive-forms)
 * @see [Usage Notes](#usage-notes)
 *
 * @usageNotes
 *
 * ### Initializing Form Controls
 *
 * Instantiate a `FormControl`, with an initial value.
 *
 * ```ts
 * const control = new FormControl('some value');
 * console.log(control.value);     // 'some value'
 *```
 *
 * The following example initializes the control with a form state object. The `value`
 * and `disabled` keys are required in this case.
 *
 * ```ts
 * const control = new FormControl({ value: 'n/a', disabled: true });
 * console.log(control.value);     // 'n/a'
 * console.log(control.status);    // 'DISABLED'
 * ```
 *
 * The following example initializes the control with a sync validator.
 *
 * ```ts
 * const control = new FormControl('', Validators.required);
 * console.log(control.value);      // ''
 * console.log(control.status);     // 'INVALID'
 * ```
 *
 * The following example initializes the control using an options object.
 *
 * ```ts
 * const control = new FormControl('', {
 *    validators: Validators.required,
 *    asyncValidators: myAsyncValidator
 * });
 * ```
 *
 * ### Configure the control to update on a blur event
 *
 * Set the `updateOn` option to `'blur'` to update on the blur `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'blur' });
 * ```
 *
 * ### Configure the control to update on a submit event
 *
 * Set the `updateOn` option to `'submit'` to update on a submit `event`.
 *
 * ```ts
 * const control = new FormControl('', { updateOn: 'submit' });
 * ```
 *
 * ### Reset the control back to an initial value
 *
 * You reset to a specific form state by passing through a standalone
 * value or a form state object that contains both a value and a disabled state
 * (these are the only two properties that cannot be calculated).
 *
 * ```ts
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 *
 * control.reset('Drew');
 *
 * console.log(control.value); // 'Drew'
 * ```
 *
 * ### Reset the control back to an initial value and disabled
 *
 * ```
 * const control = new FormControl('Nancy');
 *
 * console.log(control.value); // 'Nancy'
 * console.log(control.status); // 'VALID'
 *
 * control.reset({ value: 'Drew', disabled: true });
 *
 * console.log(control.value); // 'Drew'
 * console.log(control.status); // 'DISABLED'
 *
*/
var FormControl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControl, _super);
    /**
    * Creates a new `FormControl` instance.
    *
    * @param formState Initializes the control with an initial value,
    * or an object that defines the initial value and disabled state.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormControl(formState, validatorOrOpts, asyncValidator) {
        if (formState === void 0) { formState = null; }
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        /** @internal */
        _this._onChange = [];
        _this._applyFormState(formState);
        _this._setUpdateStrategy(validatorOrOpts);
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        _this._initObservables();
        return _this;
    }
    /**
     * Sets a new value for the form control.
     *
     * @param value The new value for the control.
     * @param options Configuration options that determine how the control proopagates changes
     * and emits events when the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
     * `onChange` event to
     * update the view.
     * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
     * `ngModelChange`
     * event to update the model.
     *
     */
    FormControl.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.value = this._pendingValue = value;
        if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) { return changeFn(_this.value, options.emitViewToModelChange !== false); });
        }
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of a control.
     *
     * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
     * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
     * `FormArrays`, where it does behave differently.
     *
     * @see `setValue` for options
     */
    FormControl.prototype.patchValue = function (value, options) {
        if (options === void 0) { options = {}; }
        this.setValue(value, options);
    };
    /**
     * Resets the form control, marking it `pristine` and `untouched`, and setting
     * the value to null.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     *
     */
    FormControl.prototype.reset = function (formState, options) {
        if (formState === void 0) { formState = null; }
        if (options === void 0) { options = {}; }
        this._applyFormState(formState);
        this.markAsPristine(options);
        this.markAsUntouched(options);
        this.setValue(this.value, options);
        this._pendingChange = false;
    };
    /**
     * @internal
     */
    FormControl.prototype._updateValue = function () { };
    /**
     * @internal
     */
    FormControl.prototype._anyControls = function (condition) { return false; };
    /**
     * @internal
     */
    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
    /**
     * Register a listener for change events.
     *
     * @param fn The method that is called when the value changes
     */
    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
    /**
     * @internal
     */
    FormControl.prototype._clearChangeFns = function () {
        this._onChange = [];
        this._onDisabledChange = [];
        this._onCollectionChange = function () { };
    };
    /**
     * Register a listener for disabled events.
     *
     * @param fn The method that is called when the disabled status changes.
     */
    FormControl.prototype.registerOnDisabledChange = function (fn) {
        this._onDisabledChange.push(fn);
    };
    /**
     * @internal
     */
    FormControl.prototype._forEachChild = function (cb) { };
    /** @internal */
    FormControl.prototype._syncPendingControls = function () {
        if (this.updateOn === 'submit') {
            if (this._pendingDirty)
                this.markAsDirty();
            if (this._pendingTouched)
                this.markAsTouched();
            if (this._pendingChange) {
                this.setValue(this._pendingValue, { onlySelf: true, emitModelToViewChange: false });
                return true;
            }
        }
        return false;
    };
    FormControl.prototype._applyFormState = function (formState) {
        if (this._isBoxedValue(formState)) {
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
                this.enable({ onlySelf: true, emitEvent: false });
        }
        else {
            this.value = this._pendingValue = formState;
        }
    };
    return FormControl;
}(AbstractControl));
/**
 * Tracks the value and validity state of a group of `FormControl` instances.
 *
 * A `FormGroup` aggregates the values of each child `FormControl` into one object,
 * with each control name as the key.  It calculates its status by reducing the status values
 * of its children. For example, if one of the controls in a group is invalid, the entire
 * group becomes invalid.
 *
 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormArray`.
 *
 * When instantiating a `FormGroup`, pass in a collection of child controls as the first
 * argument. The key for each child registers the name for the control.
 *
 * @usageNotes
 *
 * ### Create a form group with 2 controls
 *
 * ```
 * const form = new FormGroup({
 *   first: new FormControl('Nancy', Validators.minLength(2)),
 *   last: new FormControl('Drew'),
 * });
 *
 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
 * console.log(form.status);  // 'VALID'
 * ```
 *
 * ### Create a form group with a group-level validator
 *
 * You include group-level validators as the second arg, or group-level async
 * validators as the third arg. These come in handy when you want to perform validation
 * that considers the value of more than one child control.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('', Validators.minLength(2)),
 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
 * }, passwordMatchValidator);
 *
 *
 * function passwordMatchValidator(g: FormGroup) {
 *    return g.get('password').value === g.get('passwordConfirm').value
 *       ? null : {'mismatch': true};
 * }
 * ```
 *
 * Like `FormControl` instances, you choose to pass in
 * validators and async validators as part of an options object.
 *
 * ```
 * const form = new FormGroup({
 *   password: new FormControl('')
 *   passwordConfirm: new FormControl('')
 * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
 * ```
 *
 * ### Set the updateOn property for all controls in a form group
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * group level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const c = new FormGroup({
 *   one: new FormControl()
 * }, { updateOn: 'blur' });
 * ```
 */
var FormGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroup, _super);
    /**
    * Creates a new `FormGroup` instance.
    *
    * @param controls A collection of child controls. The key for each child is the name
    * under which it is registered.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Registers a control with the group's list of controls.
     *
     * This method does not update the value or validity of the control.
     * Use {@link FormGroup#addControl addControl} instead.
     *
     * @param name The control name to register in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.registerControl = function (name, control) {
        if (this.controls[name])
            return this.controls[name];
        this.controls[name] = control;
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
        return control;
    };
    /**
     * Add a control to this group.
     *
     * This method also updates the value and validity of the control.
     *
     * @param name The control name to add to the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.addControl = function (name, control) {
        this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Remove a control from this group.
     *
     * @param name The control name to remove from the collection
     */
    FormGroup.prototype.removeControl = function (name) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Replace an existing control.
     *
     * @param name The control name to replace in the collection
     * @param control Provides the control for the given name
     */
    FormGroup.prototype.setControl = function (name, control) {
        if (this.controls[name])
            this.controls[name]._registerOnCollectionChange(function () { });
        delete (this.controls[name]);
        if (control)
            this.registerControl(name, control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Check whether there is an enabled control with the given name in the group.
     *
     * Reports false for disabled controls. If you'd like to check for existence in the group
     * only, use {@link AbstractControl#get get} instead.
     *
     * @param name The control name to check for existence in the collection
     *
     * @returns false for disabled controls, true otherwise.
     */
    FormGroup.prototype.contains = function (controlName) {
        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
    };
    /**
     * Sets the value of the `FormGroup`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * ### Set the complete value for the form group
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({first: 'Nancy', last: 'Drew'});
     * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
     *
     * ```
     * @throws When strict checks fail, such as setting the value of a control
     * that doesn't exist or if you excluding the value of a control.
     *
     * @param value The new value for the control that matches the structure of the group.
     * @param options Configuration options that determine how the control propagates changes
     * and emits events after the value changes.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     */
    FormGroup.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        Object.keys(value).forEach(function (name) {
            _this._throwIfControlMissing(name);
            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of the `FormGroup`. It accepts an object with control
     * names as keys, and does its best to match the values to the correct controls
     * in the group.
     *
     * It accepts both super-sets and sub-sets of the group without throwing an error.
     *
     * ### Patch the value for a form group
     *
     *  ```
     *  const form = new FormGroup({
     *     first: new FormControl(),
     *     last: new FormControl()
     *  });
     *  console.log(form.value);   // {first: null, last: null}
     *
     *  form.patchValue({first: 'Nancy'});
     *  console.log(form.value);   // {first: 'Nancy', last: null}
     *
     *  ```
     *
     * @param value The object that matches the structure of the group
     * @param options Configure options that determines how the control propagates changes and
     * emits events after the value is patched
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * true.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormGroup.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        Object.keys(value).forEach(function (name) {
            if (_this.controls[name]) {
                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
     * the value of all descendants to null.
     *
     * You reset to a specific form state by passing in a map of states
     * that matches the structure of your form, with control names as keys. The state
     * is a standalone value or a form state object with both a value and a disabled
     * status.
     *
     * @param formState Resets the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param options Configuration options that determine how the control propagates changes
     * and emits events when the group is reset.
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
     * false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     *
     * @usageNotes
     *
     * ### Reset the form group values
     *
     * ```ts
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * console.log(form.value);  // {first: 'first name', last: 'last name'}
     *
     * form.reset({ first: 'name', last: 'last name' });
     *
     * console.log(form.value);  // {first: 'name', last: 'last name'}
     * ```
     *
     * ### Reset the form group values and disabled status
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('first name'),
     *   last: new FormControl('last name')
     * });
     *
     * form.reset({
     *   first: {value: 'name', disabled: true},
     *   last: 'last'
     * });
     *
     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
     * console.log(this.form.get('first').status);  // 'DISABLED'
     * ```
     */
    FormGroup.prototype.reset = function (value, options) {
        if (value === void 0) { value = {}; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, name) {
            control.reset(value[name], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the `FormGroup`, including any disabled controls.
     *
     * Retrieves all values regardless of disabled status.
     * The `value` property is the best way to get the value of the group, because
     * it excludes disabled controls in the `FormGroup`.
     */
    FormGroup.prototype.getRawValue = function () {
        return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
            return acc;
        });
    };
    /** @internal */
    FormGroup.prototype._syncPendingControls = function () {
        var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        });
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    FormGroup.prototype._throwIfControlMissing = function (name) {
        if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: " + name + ".");
        }
    };
    /** @internal */
    FormGroup.prototype._forEachChild = function (cb) {
        var _this = this;
        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
    };
    /** @internal */
    FormGroup.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) {
            control.setParent(_this);
            control._registerOnCollectionChange(_this._onCollectionChange);
        });
    };
    /** @internal */
    FormGroup.prototype._updateValue = function () { this.value = this._reduceValue(); };
    /** @internal */
    FormGroup.prototype._anyControls = function (condition) {
        var _this = this;
        var res = false;
        this._forEachChild(function (control, name) {
            res = res || (_this.contains(name) && condition(control));
        });
        return res;
    };
    /** @internal */
    FormGroup.prototype._reduceValue = function () {
        var _this = this;
        return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this.disabled) {
                acc[name] = control.value;
            }
            return acc;
        });
    };
    /** @internal */
    FormGroup.prototype._reduceChildren = function (initValue, fn) {
        var res = initValue;
        this._forEachChild(function (control, name) { res = fn(res, control, name); });
        return res;
    };
    /** @internal */
    FormGroup.prototype._allControlsDisabled = function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(this.controls)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var controlName = _c.value;
                if (this.controls[controlName].enabled) {
                    return false;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Object.keys(this.controls).length > 0 || this.disabled;
    };
    /** @internal */
    FormGroup.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '" + name + "'.");
            }
        });
    };
    return FormGroup;
}(AbstractControl));
/**
 * Tracks the value and validity state of an array of `FormControl`,
 * `FormGroup` or `FormArray` instances.
 *
 * A `FormArray` aggregates the values of each child `FormControl` into an array.
 * It calculates its status by reducing the status values of its children. For example, if one of
 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
 *
 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
 * along with `FormControl` and `FormGroup`.
 *
 * @usageNotes
 *
 * ### Create an array of form controls
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy', Validators.minLength(2)),
 *   new FormControl('Drew'),
 * ]);
 *
 * console.log(arr.value);   // ['Nancy', 'Drew']
 * console.log(arr.status);  // 'VALID'
 * ```
 *
 * ### Create a form array with array-level validators
 *
 * You include array-level validators and async validators. These come in handy
 * when you want to perform validation that considers the value of more than one child
 * control.
 *
 * The two types of validators are passed in separately as the second and third arg
 * respectively, or together as part of an options object.
 *
 * ```
 * const arr = new FormArray([
 *   new FormControl('Nancy'),
 *   new FormControl('Drew')
 * ], {validators: myValidator, asyncValidators: myAsyncValidator});
 * ```
 *
  * ### Set the updateOn property for all controls in a form array
 *
 * The options object is used to set a default value for each child
 * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
 * array level, all child controls default to 'blur', unless the child
 * has explicitly specified a different `updateOn` value.
 *
 * ```ts
 * const arr = new FormArray([
 *    new FormControl()
 * ], {updateOn: 'blur'});
 * ```
 *
 * ### Adding or removing controls from a form array
 *
 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
 * the `FormArray` directly, as that result in strange and unexpected behavior such
 * as broken change detection.
 *
 *
 */
var FormArray = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormArray, _super);
    /**
    * Creates a new `FormArray` instance.
    *
    * @param controls An array of child controls. Each child control is given an index
    * wheh it is registered.
    *
    * @param validatorOrOpts A synchronous validator function, or an array of
    * such functions, or an `AbstractControlOptions` object that contains validation functions
    * and a validation trigger.
    *
    * @param asyncValidator A single async validator or array of async validator functions
    *
    */
    function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this = _super.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts)) || this;
        _this.controls = controls;
        _this._initObservables();
        _this._setUpdateStrategy(validatorOrOpts);
        _this._setUpControls();
        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        return _this;
    }
    /**
     * Get the `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to retrieve the control
     */
    FormArray.prototype.at = function (index) { return this.controls[index]; };
    /**
     * Insert a new `AbstractControl` at the end of the array.
     *
     * @param control Form control to be inserted
     */
    FormArray.prototype.push = function (control) {
        this.controls.push(control);
        this._registerControl(control);
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    /**
     * Insert a new `AbstractControl` at the given `index` in the array.
     *
     * @param index Index in the array to insert the control
     * @param control Form control to be inserted
     */
    FormArray.prototype.insert = function (index, control) {
        this.controls.splice(index, 0, control);
        this._registerControl(control);
        this.updateValueAndValidity();
    };
    /**
     * Remove the control at the given `index` in the array.
     *
     * @param index Index in the array to remove the control
     */
    FormArray.prototype.removeAt = function (index) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        this.updateValueAndValidity();
    };
    /**
     * Replace an existing control.
     *
     * @param index Index in the array to replace the control
     * @param control The `AbstractControl` control to replace the existing control
     */
    FormArray.prototype.setControl = function (index, control) {
        if (this.controls[index])
            this.controls[index]._registerOnCollectionChange(function () { });
        this.controls.splice(index, 1);
        if (control) {
            this.controls.splice(index, 0, control);
            this._registerControl(control);
        }
        this.updateValueAndValidity();
        this._onCollectionChange();
    };
    Object.defineProperty(FormArray.prototype, "length", {
        /**
         * Length of the control array.
         */
        get: function () { return this.controls.length; },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches
     * the structure of the control.
     *
     * This method performs strict checks, and throws an error if you try
     * to set the value of a control that doesn't exist or if you exclude the
     * value of a control.
     *
     * ### Set the values for the controls in the form array
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl(),
     *   new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.setValue(['Nancy', 'Drew']);
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.setValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this._checkAllValuesPresent(value);
        value.forEach(function (newValue, index) {
            _this._throwIfControlMissing(index);
            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Patches the value of the `FormArray`. It accepts an array that matches the
     * structure of the control, and does its best to match the values to the correct
     * controls in the group.
     *
     * It accepts both super-sets and sub-sets of the array without throwing an error.
     *
     * ### Patch the values for controls in a form array
     *
     * ```
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * console.log(arr.value);   // [null, null]
     *
     * arr.patchValue(['Nancy']);
     * console.log(arr.value);   // ['Nancy', null]
     * ```
     *
     * @param value Array of latest values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control value is updated.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.patchValue = function (value, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        value.forEach(function (newValue, index) {
            if (_this.at(index)) {
                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: options.emitEvent });
            }
        });
        this.updateValueAndValidity(options);
    };
    /**
     * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
     * value of all descendants to null or null maps.
     *
     * You reset to a specific form state by passing in an array of states
     * that matches the structure of the control. The state is a standalone value
     * or a form state object with both a value and a disabled status.
     *
     * ### Reset the values in a form array
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl(),
     *    new FormControl()
     * ]);
     * arr.reset(['name', 'last name']);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * ```
     *
     * ### Reset the values in a form array and the disabled status for the first control
     *
     * ```
     * this.arr.reset([
     *   {value: 'name', disabled: true},
     *   'last'
     * ]);
     *
     * console.log(this.arr.value);  // ['name', 'last name']
     * console.log(this.arr.get(0).status);  // 'DISABLED'
     * ```
     *
     * @param value Array of values for the controls
     * @param options Configure options that determine how the control propagates changes and
     * emits events after the value changes
     *
     * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
     * is false.
     * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
     * `valueChanges`
     * observables emit events with the latest status and value when the control is reset.
     * When false, no events are emitted.
     * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
     * updateValueAndValidity} method.
     */
    FormArray.prototype.reset = function (value, options) {
        if (value === void 0) { value = []; }
        if (options === void 0) { options = {}; }
        this._forEachChild(function (control, index) {
            control.reset(value[index], { onlySelf: true, emitEvent: options.emitEvent });
        });
        this.updateValueAndValidity(options);
        this._updatePristine(options);
        this._updateTouched(options);
    };
    /**
     * The aggregate value of the array, including any disabled controls.
     *
     * Reports all values regardless of disabled status.
     * For enabled controls only, the `value` property is the best way to get the value of the array.
     */
    FormArray.prototype.getRawValue = function () {
        return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : control.getRawValue();
        });
    };
    /** @internal */
    FormArray.prototype._syncPendingControls = function () {
        var subtreeUpdated = this.controls.reduce(function (updated, child) {
            return child._syncPendingControls() ? true : updated;
        }, false);
        if (subtreeUpdated)
            this.updateValueAndValidity({ onlySelf: true });
        return subtreeUpdated;
    };
    /** @internal */
    FormArray.prototype._throwIfControlMissing = function (index) {
        if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
        }
        if (!this.at(index)) {
            throw new Error("Cannot find form control at index " + index);
        }
    };
    /** @internal */
    FormArray.prototype._forEachChild = function (cb) {
        this.controls.forEach(function (control, index) { cb(control, index); });
    };
    /** @internal */
    FormArray.prototype._updateValue = function () {
        var _this = this;
        this.value =
            this.controls.filter(function (control) { return control.enabled || _this.disabled; })
                .map(function (control) { return control.value; });
    };
    /** @internal */
    FormArray.prototype._anyControls = function (condition) {
        return this.controls.some(function (control) { return control.enabled && condition(control); });
    };
    /** @internal */
    FormArray.prototype._setUpControls = function () {
        var _this = this;
        this._forEachChild(function (control) { return _this._registerControl(control); });
    };
    /** @internal */
    FormArray.prototype._checkAllValuesPresent = function (value) {
        this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: " + i + ".");
            }
        });
    };
    /** @internal */
    FormArray.prototype._allControlsDisabled = function () {
        var e_2, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.controls), _c = _b.next(); !_c.done; _c = _b.next()) {
                var control = _c.value;
                if (control.enabled)
                    return false;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this.controls.length > 0 || this.disabled;
    };
    FormArray.prototype._registerControl = function (control) {
        control.setParent(this);
        control._registerOnCollectionChange(this._onCollectionChange);
    };
    return FormArray;
}(AbstractControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgForm; })
};
var resolvedPromise = Promise.resolve(null);
/**
 * @description
 *
 * Creates a top-level `FormGroup` instance and binds it to a form
 * to track aggregate form value and validation status.
 *
 * As soon as you import the `FormsModule`, this directive becomes active by default on
 * all `<form>` tags.  You don't need to add a special selector.
 *
 * You can export the directive into a local template variable using `ngForm` as the key
 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
 * `FormGroup` instance are duplicated on the directive itself, so a reference to it
 * will give you access to the aggregate value and validity status of the form, as well as
 * user interaction properties like `dirty` and `touched`.
 *
 * To register child controls with the form, you'll want to use `NgModel` with a
 * `name` attribute.  You can also use `NgModelGroup` if you'd like to create
 * sub-groups within the form.
 *
 * You can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
 * If you want to import the `FormsModule` but skip its usage in some forms,
 * for example, to use native HTML5 validation, you can add `ngNoForm` and the `<form>`
 * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
 * unnecessary because the `<form>` tags are inert. In that case, you would
 * refrain from using the `formGroup` directive.
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * * **npm package**: `@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 *
 */
var NgForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgForm, _super);
    function NgForm(validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this.submitted = false;
        _this._directives = [];
        _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.form =
            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this;
    }
    NgForm.prototype.ngAfterViewInit = function () { this._setUpdateStrategy(); };
    Object.defineProperty(NgForm.prototype, "formDirective", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "control", {
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "path", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgForm.prototype, "controls", {
        get: function () { return this.form.controls; },
        enumerable: true,
        configurable: true
    });
    NgForm.prototype.addControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            dir.control =
                container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({ emitEvent: false });
            _this._directives.push(dir);
        });
    };
    NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
    NgForm.prototype.removeControl = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
            removeDir(_this._directives, dir);
        });
    };
    NgForm.prototype.addFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            var group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({ emitEvent: false });
        });
    };
    NgForm.prototype.removeFormGroup = function (dir) {
        var _this = this;
        resolvedPromise.then(function () {
            var container = _this._findContainer(dir.path);
            if (container) {
                container.removeControl(dir.name);
            }
        });
    };
    NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
    NgForm.prototype.updateModel = function (dir, value) {
        var _this = this;
        resolvedPromise.then(function () {
            var ctrl = _this.form.get(dir.path);
            ctrl.setValue(value);
        });
    };
    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
    NgForm.prototype.onSubmit = function ($event) {
        this.submitted = true;
        syncPendingControls(this.form, this._directives);
        this.ngSubmit.emit($event);
        return false;
    };
    NgForm.prototype.onReset = function () { this.resetForm(); };
    NgForm.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this.submitted = false;
    };
    NgForm.prototype._setUpdateStrategy = function () {
        if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
        }
    };
    /** @internal */
    NgForm.prototype._findContainer = function (path) {
        path.pop();
        return path.length ? this.form.get(path) : this.form;
    };
    NgForm.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
                    providers: [formDirectiveProvider],
                    host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                    outputs: ['ngSubmit'],
                    exportAs: 'ngForm'
                },] }
    ];
    /** @nocollapse */
    NgForm.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
    ]; };
    NgForm.propDecorators = {
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngFormOptions',] }]
    };
    return NgForm;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TemplateDrivenErrors = /** @class */ (function () {
    function TemplateDrivenErrors() {
    }
    TemplateDrivenErrors.modelParentException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
    };
    TemplateDrivenErrors.formGroupNameException = function () {
        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    TemplateDrivenErrors.missingNameException = function () {
        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
    };
    TemplateDrivenErrors.modelGroupParentException = function () {
        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
    };
    return TemplateDrivenErrors;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var modelGroupProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgModelGroup; })
};
/**
 * @description
 *
 * Creates and binds a `FormGroup` instance to a DOM element.
 *
 * This directive can only be used as a child of `NgForm` (or in other words,
 * within `<form>` tags).
 *
 * Use this directive if you'd like to create a sub-group within a form. This can
 * come in handy if you want to validate a sub-group of your form separately from
 * the rest of your form, or if some values in your domain model make more sense to
 * consume together in a nested object.
 *
 * Pass in the name you'd like this sub-group to have and it will become the key
 * for the sub-group in the form's full value. You can also export the directive into
 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
 *
 * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
 *
 * * **npm package**: `@angular/forms`
 *
 * * **NgModule**: `FormsModule`
 *
 *
 */
var NgModelGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgModelGroup, _super);
    function NgModelGroup(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /** @internal */
    NgModelGroup.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
        }
    };
    NgModelGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] }
    ];
    /** @nocollapse */
    NgModelGroup.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
    ]; };
    NgModelGroup.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngModelGroup',] }]
    };
    return NgModelGroup;
}(AbstractFormGroupDirective));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formControlBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return NgModel; })
};
/**
 * `ngModel` forces an additional change detection run when its inputs change:
 * E.g.:
 * ```
 * <div>{{myModel.valid}}</div>
 * <input [(ngModel)]="myValue" #myModel="ngModel">
 * ```
 * I.e. `ngModel` can export itself on the element and then be used in the template.
 * Normally, this would result in expressions before the `input` that use the exported directive
 * to have and old value as they have been
 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
 * detection run.
 *
 * Notes:
 * - this is just one extra run no matter how many `ngModel` have been changed.
 * - this is a general problem when using `exportAs` for directives!
 */
var resolvedPromise$1 = Promise.resolve(null);
/**
 * @description
 *
 * Creates a `FormControl` instance from a domain model and binds it
 * to a form control element.
 *
 * The `FormControl` instance will track the value, user interaction, and
 * validation status of the control and keep the view synced with the model. If used
 * within a parent form, the directive will also register itself with the form as a child
 * control.
 *
 * This directive can be used by itself or as part of a larger form. All you need is the
 * `ngModel` selector to activate it.
 *
 * It accepts a domain model as an optional `Input`. If you have a one-way binding
 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
 * the domain model in your class as well.
 *
 * If you wish to inspect the properties of the associated `FormControl` (like
 * validity state), you can also export the directive into a local template variable using
 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
 * will fall through to the control anyway, so you can access them directly. You can see a
 * full list of properties directly available in `AbstractControlDirective`.
 *
 * The following is an example of a simple standalone control using `ngModel`:
 *
 * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
 *
 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
 * so that the control can be registered with the parent form under that name.
 *
 * It's worth noting that in the context of a parent form, you often can skip one-way or
 * two-way binding because the parent form will sync the value for you. You can access
 * its properties by exporting it into a local template variable using `ngForm` (ex:
 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
 *
 * If you do need to populate initial values into your form, using a one-way binding for
 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
 * than the domain model's value on submit.
 *
 * Take a look at an example of using `ngModel` within a form:
 *
 * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
 *
 * To see `ngModel` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * **npm package**: `@angular/forms`
 *
 * **NgModule**: `FormsModule`
 *
 *
 */
var NgModel = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NgModel, _super);
    function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this = _super.call(this) || this;
        _this.control = new FormControl();
        /** @internal */
        _this._registered = false;
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    NgModel.prototype.ngOnChanges = function (changes) {
        this._checkForErrors();
        if (!this._registered)
            this._setUpControl();
        if ('isDisabled' in changes) {
            this._updateDisabled(changes);
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);
            this.viewModel = this.model;
        }
    };
    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
    Object.defineProperty(NgModel.prototype, "path", {
        get: function () {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "formDirective", {
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "validator", {
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgModel.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    NgModel.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    NgModel.prototype._setUpControl = function () {
        this._setUpdateStrategy();
        this._isStandalone() ? this._setUpStandalone() :
            this.formDirective.addControl(this);
        this._registered = true;
    };
    NgModel.prototype._setUpdateStrategy = function () {
        if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
        }
    };
    NgModel.prototype._isStandalone = function () {
        return !this._parent || !!(this.options && this.options.standalone);
    };
    NgModel.prototype._setUpStandalone = function () {
        setUpControl(this.control, this);
        this.control.updateValueAndValidity({ emitEvent: false });
    };
    NgModel.prototype._checkForErrors = function () {
        if (!this._isStandalone()) {
            this._checkParentType();
        }
        this._checkName();
    };
    NgModel.prototype._checkParentType = function () {
        if (!(this._parent instanceof NgModelGroup) &&
            this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
        }
        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
        }
    };
    NgModel.prototype._checkName = function () {
        if (this.options && this.options.name)
            this.name = this.options.name;
        if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
        }
    };
    NgModel.prototype._updateValue = function (value) {
        var _this = this;
        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
    };
    NgModel.prototype._updateDisabled = function (changes) {
        var _this = this;
        var disabledValue = changes['isDisabled'].currentValue;
        var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
        resolvedPromise$1.then(function () {
            if (isDisabled && !_this.control.disabled) {
                _this.control.disable();
            }
            else if (!isDisabled && _this.control.disabled) {
                _this.control.enable();
            }
        });
    };
    NgModel.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[ngModel]:not([formControlName]):not([formControl])',
                    providers: [formControlBinding],
                    exportAs: 'ngModel'
                },] }
    ];
    /** @nocollapse */
    NgModel.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALUE_ACCESSOR,] }] }
    ]; };
    NgModel.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['disabled',] }],
        model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngModel',] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngModelOptions',] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['ngModelChange',] }]
    };
    return NgModel;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Token to provide to turn off the ngModel warning on formControl and formControlName.
 */
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NgModelWithFormControlWarning');
var formControlBinding$1 = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormControlDirective; })
};
/**
 * @description
 *
 * Syncs a standalone `FormControl` instance to a form control element.
 *
 * This directive ensures that any values written to the `FormControl`
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * `FormControl` instance (view -> model).
 *
 * Use this directive if you'd like to create and manage a `FormControl` instance directly.
 * Simply create a `FormControl`, save it to your component class, and pass it into the
 * `FormControlDirective`.
 *
 * This directive is designed to be used as a standalone control.  Unlike `FormControlName`,
 * it does not require that your `FormControl` instance be part of any parent
 * `FormGroup`, and it won't be registered to any `FormGroupDirective` that
 * exists above it.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * `FormControl` instance. See a full list of available properties in
 * `AbstractControl`.
 *
 * **Set the value**: You can pass in an initial value when instantiating the `FormControl`,
 * or you can set it programmatically later using {@link AbstractControl#setValue setValue} or
 * {@link AbstractControl#patchValue patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
 * {@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
 *
 * * **npm package**: `@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 * ```html
 * <input [formControl]="control" [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <input [formControl]="control">
 * ```
 *
 * ```ts
 * this.control.setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 *
 */
var FormControlDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControlDirective, _super);
    function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this = _super.call(this) || this;
        _this._ngModelWarningConfig = _ngModelWarningConfig;
        /** @deprecated as of v6 */
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlDirective instance. Used to support warning config of "always".
         *
         * @internal
         */
        _this._ngModelWarningSent = false;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    FormControlDirective.prototype.ngOnChanges = function (changes) {
        if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);
            if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
            }
            this.form.updateValueAndValidity({ emitEvent: false });
        }
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);
            this.form.setValue(this.model);
            this.viewModel = this.model;
        }
    };
    Object.defineProperty(FormControlDirective.prototype, "path", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "validator", {
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    FormControlDirective.prototype._isControlChanged = function (changes) {
        return changes.hasOwnProperty('form');
    };
    /**
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * @internal
     */
    FormControlDirective._ngModelWarningSentOnce = false;
    FormControlDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] }
    ];
    /** @nocollapse */
    FormControlDirective.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
    ]; };
    FormControlDirective.propDecorators = {
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['formControl',] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['disabled',] }],
        model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngModel',] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['ngModelChange',] }]
    };
    return FormControlDirective;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formDirectiveProvider$1 = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormGroupDirective; })
};
/**
 * @description
 *
 * Binds an existing `FormGroup` to a DOM element.
 *
 * This directive accepts an existing `FormGroup` instance. It will then use this
 * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
 * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
 * and `FormArrayName` directives.
 *
 * **Set value**: You can set the form's initial value when instantiating the
 * `FormGroup`, or you can set it programmatically later using the `FormGroup`'s
 * {@link AbstractControl#setValue setValue} or {@link AbstractControl#patchValue patchValue}
 * methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
 * to the `FormGroup`'s {@link AbstractControl#valueChanges valueChanges} event.  You can also
 * listen to its {@link AbstractControl#statusChanges statusChanges} event to be notified when the
 * validation status is re-calculated.
 *
 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
 * submission event.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * **npm package**: `@angular/forms`
 *
 * **NgModule**: `ReactiveFormsModule`
 *
 *
 */
var FormGroupDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroupDirective, _super);
    function FormGroupDirective(_validators, _asyncValidators) {
        var _this = _super.call(this) || this;
        _this._validators = _validators;
        _this._asyncValidators = _asyncValidators;
        _this.submitted = false;
        _this.directives = [];
        _this.form = null;
        _this.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    FormGroupDirective.prototype.ngOnChanges = function (changes) {
        this._checkFormPresent();
        if (changes.hasOwnProperty('form')) {
            this._updateValidators();
            this._updateDomValue();
            this._updateRegistrations();
        }
    };
    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "control", {
        get: function () { return this.form; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupDirective.prototype, "path", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    FormGroupDirective.prototype.addControl = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpControl(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
        this.directives.push(dir);
        return ctrl;
    };
    FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
    FormGroupDirective.prototype.removeControl = function (dir) { removeDir(this.directives, dir); };
    FormGroupDirective.prototype.addFormGroup = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
    FormGroupDirective.prototype.addFormArray = function (dir) {
        var ctrl = this.form.get(dir.path);
        setUpFormContainer(ctrl, dir);
        ctrl.updateValueAndValidity({ emitEvent: false });
    };
    FormGroupDirective.prototype.removeFormArray = function (dir) { };
    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
    FormGroupDirective.prototype.updateModel = function (dir, value) {
        var ctrl = this.form.get(dir.path);
        ctrl.setValue(value);
    };
    FormGroupDirective.prototype.onSubmit = function ($event) {
        this.submitted = true;
        syncPendingControls(this.form, this.directives);
        this.ngSubmit.emit($event);
        return false;
    };
    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
    FormGroupDirective.prototype.resetForm = function (value) {
        if (value === void 0) { value = undefined; }
        this.form.reset(value);
        this.submitted = false;
    };
    /** @internal */
    FormGroupDirective.prototype._updateDomValue = function () {
        var _this = this;
        this.directives.forEach(function (dir) {
            var newCtrl = _this.form.get(dir.path);
            if (dir.control !== newCtrl) {
                cleanUpControl(dir.control, dir);
                if (newCtrl)
                    setUpControl(newCtrl, dir);
                dir.control = newCtrl;
            }
        });
        this.form._updateTreeValidity({ emitEvent: false });
    };
    FormGroupDirective.prototype._updateRegistrations = function () {
        var _this = this;
        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
        if (this._oldForm)
            this._oldForm._registerOnCollectionChange(function () { });
        this._oldForm = this.form;
    };
    FormGroupDirective.prototype._updateValidators = function () {
        var sync = composeValidators(this._validators);
        this.form.validator = Validators.compose([this.form.validator, sync]);
        var async = composeAsyncValidators(this._asyncValidators);
        this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
    };
    FormGroupDirective.prototype._checkFormPresent = function () {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    };
    FormGroupDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[formGroup]',
                    providers: [formDirectiveProvider$1],
                    host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
                    exportAs: 'ngForm'
                },] }
    ];
    /** @nocollapse */
    FormGroupDirective.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
    ]; };
    FormGroupDirective.propDecorators = {
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['formGroup',] }],
        ngSubmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return FormGroupDirective;
}(ControlContainer));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var formGroupNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormGroupName; })
};
/**
 * @description
 *
 * Syncs a nested `FormGroup` to a DOM element.
 *
 * This directive can only be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormGroup` you want to link, and
 * will look for a `FormGroup` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Nested form groups can come in handy when you want to validate a sub-group of a
 * form separately from the rest or when you'd like to group the values of certain
 * controls into their own nested object.
 *
 * **Access the group**: You can access the associated `FormGroup` using the
 * {@link AbstractControl#get get} method. Ex: `this.form.get('name')`.
 *
 * You can also access individual controls within the group using dot syntax.
 * Ex: `this.form.get('name.first')`
 *
 * **Get the value**: the `value` property is always synced and available on the
 * `FormGroup`. See a full list of available properties in `AbstractControl`.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the `FormGroup`, or you can set it programmatically later using
 * {@link AbstractControl#setValue setValue} or {@link AbstractControl#patchValue patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the group, you can
 * subscribe to the {@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
 * {@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
 *
 * * **npm package**: `@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 *
 */
var FormGroupName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormGroupName, _super);
    function FormGroupName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    /** @internal */
    FormGroupName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
        }
    };
    FormGroupName.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] }
    ];
    /** @nocollapse */
    FormGroupName.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
    ]; };
    FormGroupName.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['formGroupName',] }]
    };
    return FormGroupName;
}(AbstractFormGroupDirective));
var formArrayNameProvider = {
    provide: ControlContainer,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormArrayName; })
};
/**
 * @description
 *
 * Syncs a nested `FormArray` to a DOM element.
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the nested `FormArray` you want to link, and
 * will look for a `FormArray` registered with that name in the parent
 * `FormGroup` instance you passed into `FormGroupDirective`.
 *
 * Nested form arrays can come in handy when you have a group of form controls but
 * you're not sure how many there will be. Form arrays allow you to create new
 * form controls dynamically.
 *
 * **Access the array**: You can access the associated `FormArray` using the
 * {@link AbstractControl#get get} method on the parent `FormGroup`.
 * Ex: `this.form.get('cities')`.
 *
 * **Get the value**: the `value` property is always synced and available on the
 * `FormArray`. See a full list of available properties in `AbstractControl`.
 *
 * **Set the value**: You can set an initial value for each child control when instantiating
 * the `FormArray`, or you can set the value programmatically later using the
 * `FormArray`'s {@link AbstractControl#setValue setValue} or
 * {@link AbstractControl#patchValue patchValue} methods.
 *
 * **Listen to value**: If you want to listen to changes in the value of the array, you can
 * subscribe to the `FormArray`'s {@link AbstractControl#valueChanges valueChanges} event.
 * You can also listen to its {@link AbstractControl#statusChanges statusChanges} event to be
 * notified when the validation status is re-calculated.
 *
 * **Add new controls**: You can add new controls to the `FormArray` dynamically by calling
 * its {@link FormArray#push push} method.
 * Ex: `this.form.get('cities').push(new FormControl());`
 *
 * ### Example
 *
 * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
 *
 * * **npm package**: `@angular/forms`
 *
 * * **NgModule**: `ReactiveFormsModule`
 *
 *
 */
var FormArrayName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormArrayName, _super);
    function FormArrayName(parent, validators, asyncValidators) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        _this._validators = validators;
        _this._asyncValidators = asyncValidators;
        return _this;
    }
    FormArrayName.prototype.ngOnInit = function () {
        this._checkParentType();
        this.formDirective.addFormArray(this);
    };
    FormArrayName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeFormArray(this);
        }
    };
    Object.defineProperty(FormArrayName.prototype, "control", {
        get: function () { return this.formDirective.getFormArray(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "formDirective", {
        get: function () {
            return this._parent ? this._parent.formDirective : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "path", {
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "validator", {
        get: function () { return composeValidators(this._validators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._asyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    FormArrayName.prototype._checkParentType = function () {
        if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
        }
    };
    FormArrayName.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] }
    ];
    /** @nocollapse */
    FormArrayName.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] }
    ]; };
    FormArrayName.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['formArrayName',] }]
    };
    return FormArrayName;
}(ControlContainer));
function _hasInvalidParent(parent) {
    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
        !(parent instanceof FormArrayName);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var controlNameBinding = {
    provide: NgControl,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return FormControlName; })
};
/**
 * @description
 *
 * Syncs a `FormControl` in an existing `FormGroup` to a form control
 * element by name.
 *
 * This directive ensures that any values written to the `FormControl`
 * instance programmatically will be written to the DOM element (model -> view). Conversely,
 * any values written to the DOM element through user input will be reflected in the
 * `FormControl` instance (view -> model).
 *
 * This directive is designed to be used with a parent `FormGroupDirective` (selector:
 * `[formGroup]`).
 *
 * It accepts the string name of the `FormControl` instance you want to
 * link, and will look for a `FormControl` registered with that name in the
 * closest `FormGroup` or `FormArray` above it.
 *
 * **Access the control**: You can access the `FormControl` associated with
 * this directive by using the {@link AbstractControl#get get} method.
 * Ex: `this.form.get('first');`
 *
 * **Get value**: the `value` property is always synced and available on the `FormControl`.
 * See a full list of available properties in `AbstractControl`.
 *
 *  **Set value**: You can set an initial value for the control when instantiating the
 *  `FormControl`, or you can set it programmatically later using
 *  {@link AbstractControl#setValue setValue} or {@link AbstractControl#patchValue patchValue}.
 *
 * **Listen to value**: If you want to listen to changes in the value of the control, you can
 * subscribe to the {@link AbstractControl#valueChanges valueChanges} event.  You can also listen to
 * {@link AbstractControl#statusChanges statusChanges} to be notified when the validation status is
 * re-calculated.
 *
 * ### Example
 *
 * In this example, we create form controls for first name and last name.
 *
 * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
 *
 * To see `formControlName` examples with different form control types, see:
 *
 * * Radio buttons: `RadioControlValueAccessor`
 * * Selects: `SelectControlValueAccessor`
 *
 * **npm package**: `@angular/forms`
 *
 * **NgModule**: `ReactiveFormsModule`
 *
 * ### Use with ngModel
 *
 * Support for using the `ngModel` input property and `ngModelChange` event with reactive
 * form directives has been deprecated in Angular v6 and will be removed in Angular v7.
 *
 * Now deprecated:
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first" [(ngModel)]="value">
 * </form>
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * This has been deprecated for a few reasons. First, developers have found this pattern
 * confusing. It seems like the actual `ngModel` directive is being used, but in fact it's
 * an input/output property named `ngModel` on the reactive form directive that simply
 * approximates (some of) its behavior. Specifically, it allows getting/setting the value
 * and intercepting value events. However, some of `ngModel`'s other features - like
 * delaying updates with`ngModelOptions` or exporting the directive - simply don't work,
 * which has understandably caused some confusion.
 *
 * In addition, this pattern mixes template-driven and reactive forms strategies, which
 * we generally don't recommend because it doesn't take advantage of the full benefits of
 * either strategy. Setting the value in the template violates the template-agnostic
 * principles behind reactive forms, whereas adding a `FormControl`/`FormGroup` layer in
 * the class removes the convenience of defining forms in the template.
 *
 * To update your code before v7, you'll want to decide whether to stick with reactive form
 * directives (and get/set values using reactive forms patterns) or switch over to
 * template-driven directives.
 *
 * After (choice 1 - use reactive forms):
 *
 * ```html
 * <form [formGroup]="form">
 *   <input formControlName="first">
 * </form>
 * ```
 *
 * ```ts
 * this.form.get('first').setValue('some value');
 * ```
 *
 * After (choice 2 - use template-driven forms):
 *
 * ```html
 * <input [(ngModel)]="value">
 * ```
 *
 * ```ts
 * this.value = 'some value';
 * ```
 *
 * By default, when you use this pattern, you will see a deprecation warning once in dev
 * mode. You can choose to silence this warning by providing a config for
 * `ReactiveFormsModule` at import time:
 *
 * ```ts
 * imports: [
 *   ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'});
 * ]
 * ```
 *
 * Alternatively, you can choose to surface a separate warning for each instance of this
 * pattern with a config value of `"always"`. This may help to track down where in the code
 * the pattern is being used as the code is being updated.
 *
 *
 */
var FormControlName = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FormControlName, _super);
    function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this = _super.call(this) || this;
        _this._ngModelWarningConfig = _ngModelWarningConfig;
        _this._added = false;
        /** @deprecated as of v6 */
        _this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * @internal
         */
        _this._ngModelWarningSent = false;
        _this._parent = parent;
        _this._rawValidators = validators || [];
        _this._rawAsyncValidators = asyncValidators || [];
        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
        return _this;
    }
    Object.defineProperty(FormControlName.prototype, "isDisabled", {
        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
        enumerable: true,
        configurable: true
    });
    FormControlName.prototype.ngOnChanges = function (changes) {
        if (!this._added)
            this._setUpControl();
        if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);
            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
        }
    };
    FormControlName.prototype.ngOnDestroy = function () {
        if (this.formDirective) {
            this.formDirective.removeControl(this);
        }
    };
    FormControlName.prototype.viewToModelUpdate = function (newValue) {
        this.viewModel = newValue;
        this.update.emit(newValue);
    };
    Object.defineProperty(FormControlName.prototype, "path", {
        get: function () { return controlPath(this.name, this._parent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "formDirective", {
        get: function () { return this._parent ? this._parent.formDirective : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "validator", {
        get: function () { return composeValidators(this._rawValidators); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
        get: function () {
            return composeAsyncValidators(this._rawAsyncValidators);
        },
        enumerable: true,
        configurable: true
    });
    FormControlName.prototype._checkParentType = function () {
        if (!(this._parent instanceof FormGroupName) &&
            this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
        }
        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
            !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
        }
    };
    FormControlName.prototype._setUpControl = function () {
        this._checkParentType();
        this.control = this.formDirective.addControl(this);
        if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
        }
        this._added = true;
    };
    /**
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * @internal
     */
    FormControlName._ngModelWarningSentOnce = false;
    FormControlName.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] }
    ];
    /** @nocollapse */
    FormControlName.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_ASYNC_VALIDATORS,] }] },
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_VALUE_ACCESSOR,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NG_MODEL_WITH_FORM_CONTROL_WARNING,] }] }
    ]; };
    FormControlName.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['formControlName',] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['disabled',] }],
        model: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngModel',] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['ngModelChange',] }]
    };
    return FormControlName;
}(NgControl));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return RequiredValidator; }),
    multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return CheckboxRequiredValidator; }),
    multi: true
};
/**
 * A Directive that adds the `required` validator to any controls marked with the
 * `required` attribute, via the `NG_VALIDATORS` binding.
 *
 * ### Example
 *
 * ```
 * <input name="fullName" ngModel required>
 * ```
 *
 *
 */
var RequiredValidator = /** @class */ (function () {
    function RequiredValidator() {
    }
    Object.defineProperty(RequiredValidator.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) {
            this._required = value != null && value !== false && "" + value !== 'false';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    RequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.required(c) : null;
    };
    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    RequiredValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
                    providers: [REQUIRED_VALIDATOR],
                    host: { '[attr.required]': 'required ? "" : null' }
                },] }
    ];
    RequiredValidator.propDecorators = {
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return RequiredValidator;
}());
/**
 * A Directive that adds the `required` validator to checkbox controls marked with the
 * `required` attribute, via the `NG_VALIDATORS` binding.
 *
 * ### Example
 *
 * ```
 * <input type="checkbox" name="active" ngModel required>
 * ```
 *
 * @experimental
 */
var CheckboxRequiredValidator = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CheckboxRequiredValidator, _super);
    function CheckboxRequiredValidator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxRequiredValidator.prototype.validate = function (c) {
        return this.required ? Validators.requiredTrue(c) : null;
    };
    CheckboxRequiredValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
                    providers: [CHECKBOX_REQUIRED_VALIDATOR],
                    host: { '[attr.required]': 'required ? "" : null' }
                },] }
    ];
    return CheckboxRequiredValidator;
}(RequiredValidator));
/**
 * Provider which adds `EmailValidator` to `NG_VALIDATORS`.
 */
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return EmailValidator; }),
    multi: true
};
/**
 * A Directive that adds the `email` validator to controls marked with the
 * `email` attribute, via the `NG_VALIDATORS` binding.
 *
 * ### Example
 *
 * ```
 * <input type="email" name="email" ngModel email>
 * <input type="email" name="email" ngModel email="true">
 * <input type="email" name="email" ngModel [email]="true">
 * ```
 *
 * @experimental
 */
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    Object.defineProperty(EmailValidator.prototype, "email", {
        set: function (value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange)
                this._onChange();
        },
        enumerable: true,
        configurable: true
    });
    EmailValidator.prototype.validate = function (c) {
        return this._enabled ? Validators.email(c) : null;
    };
    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    EmailValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                    providers: [EMAIL_VALIDATOR]
                },] }
    ];
    EmailValidator.propDecorators = {
        email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return EmailValidator;
}());
/**
 * Provider which adds `MinLengthValidator` to `NG_VALIDATORS`.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='min'}
 */
var MIN_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MinLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the `MinLengthValidator` for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
 *
 *
 */
var MinLengthValidator = /** @class */ (function () {
    function MinLengthValidator() {
    }
    MinLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('minlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    MinLengthValidator.prototype.validate = function (c) {
        return this.minlength == null ? null : this._validator(c);
    };
    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    MinLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.minLength(parseInt(this.minlength, 10));
    };
    MinLengthValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
                    providers: [MIN_LENGTH_VALIDATOR],
                    host: { '[attr.minlength]': 'minlength ? minlength : null' }
                },] }
    ];
    MinLengthValidator.propDecorators = {
        minlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return MinLengthValidator;
}());
/**
 * Provider which adds `MaxLengthValidator` to `NG_VALIDATORS`.
 *
 * ## Example:
 *
 * {@example common/forms/ts/validators/validators.ts region='max'}
 */
var MAX_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return MaxLengthValidator; }),
    multi: true
};
/**
 * A directive which installs the `MaxLengthValidator` for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `maxlength` attribute.
 *
 *
 */
var MaxLengthValidator = /** @class */ (function () {
    function MaxLengthValidator() {
    }
    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
        if ('maxlength' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    MaxLengthValidator.prototype.validate = function (c) {
        return this.maxlength != null ? this._validator(c) : null;
    };
    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    MaxLengthValidator.prototype._createValidator = function () {
        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
    };
    MaxLengthValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
                    providers: [MAX_LENGTH_VALIDATOR],
                    host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
                },] }
    ];
    MaxLengthValidator.propDecorators = {
        maxlength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return MaxLengthValidator;
}());
var PATTERN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PatternValidator; }),
    multi: true
};
/**
 * A Directive that adds the `pattern` validator to any controls marked with the
 * `pattern` attribute, via the `NG_VALIDATORS` binding. Uses attribute value
 * as the regex to validate Control value against.  Follows pattern attribute
 * semantics; i.e. regex must match entire Control value.
 *
 * ### Example
 *
 * ```
 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
 * ```
 *
 */
var PatternValidator = /** @class */ (function () {
    function PatternValidator() {
    }
    PatternValidator.prototype.ngOnChanges = function (changes) {
        if ('pattern' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
    PatternValidator.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
                    providers: [PATTERN_VALIDATOR],
                    host: { '[attr.pattern]': 'pattern ? pattern : null' }
                },] }
    ];
    PatternValidator.propDecorators = {
        pattern: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return PatternValidator;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 * Creates an `AbstractControl` from a user-specified configuration.
 *
 * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
 * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
 * forms.
 *
 * @see [Reactive Forms Guide](/guide/reactive-forms)
 *
 */
var FormBuilder = /** @class */ (function () {
    function FormBuilder() {
    }
    /**
     * @description
     * Construct a new `FormGroup` instance.
     *
     * @param controlsConfig A collection of child controls. The key for each child is the name
     * under which it is registered.
     *
     * @param extra An object of configuration options for the `FormGroup`.
     * * `validator`: A synchronous validator function, or an array of validator functions
     * * `asyncValidator`: A single async validator or array of async validator functions
     *
     */
    FormBuilder.prototype.group = function (controlsConfig, extra) {
        if (extra === void 0) { extra = null; }
        var controls = this._reduceControls(controlsConfig);
        var validator = extra != null ? extra['validator'] : null;
        var asyncValidator = extra != null ? extra['asyncValidator'] : null;
        return new FormGroup(controls, validator, asyncValidator);
    };
    /**
     * @description
     * Construct a new `FormControl` instance.
     *
     * @param formState Initializes the control with an initial value,
     * or an object that defines the initial value and disabled state.
     *
     * @param validator A synchronous validator function, or an array of synchronous validator
     * functions.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     *
     * @usageNotes
     *
     * ### Initialize a control as disabled
     *
     * The following example returns a control with an initial value in a disabled state.
     *
     * <code-example path="forms/ts/formBuilder/form_builder_example.ts"
     *   linenums="false" region="disabled-control">
     * </code-example>
     *
     */
    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
        return new FormControl(formState, validator, asyncValidator);
    };
    /**
     * @description
     * Construct a new `FormArray` instance.
     *
     * @param controlsConfig An array of child controls. The key for each child control is its index
     * in the array.
     *
     * @param validator A synchronous validator function, or an array of synchronous validator
     * functions.
     *
     * @param asyncValidator A single async validator or array of async validator functions
     */
    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
        var _this = this;
        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
        return new FormArray(controls, validator, asyncValidator);
    };
    /** @internal */
    FormBuilder.prototype._reduceControls = function (controlsConfig) {
        var _this = this;
        var controls = {};
        Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this._createControl(controlsConfig[controlName]);
        });
        return controls;
    };
    /** @internal */
    FormBuilder.prototype._createControl = function (controlConfig) {
        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
            controlConfig instanceof FormArray) {
            return controlConfig;
        }
        else if (Array.isArray(controlConfig)) {
            var value = controlConfig[0];
            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
        }
        else {
            return this.control(controlConfig);
        }
    };
    FormBuilder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return FormBuilder;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('6.1.4');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @description
 *
 * Adds `novalidate` attribute to all forms by default.
 *
 * `novalidate` is used to disable browser's native form validation.
 *
 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
 *
 * ```
 * <form ngNativeValidate></form>
 * ```
 *
 * @experimental
 */
var NgNoValidate = /** @class */ (function () {
    function NgNoValidate() {
    }
    NgNoValidate.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
                    host: { 'novalidate': '' },
                },] }
    ];
    return NgNoValidate;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var SHARED_FORM_DIRECTIVES = [
    NgNoValidate,
    NgSelectOption,
    NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    RangeValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    SelectMultipleControlValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinLengthValidator,
    MaxLengthValidator,
    PatternValidator,
    CheckboxRequiredValidator,
    EmailValidator,
];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
/**
 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
 */
var InternalFormsSharedModule = /** @class */ (function () {
    function InternalFormsSharedModule() {
    }
    InternalFormsSharedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: SHARED_FORM_DIRECTIVES,
                    exports: SHARED_FORM_DIRECTIVES,
                },] }
    ];
    return InternalFormsSharedModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The ng module for forms.
 *
 */
var FormsModule = /** @class */ (function () {
    function FormsModule() {
    }
    FormsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: TEMPLATE_DRIVEN_DIRECTIVES,
                    providers: [RadioControlRegistry],
                    exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
                },] }
    ];
    return FormsModule;
}());
/**
 * The ng module for reactive forms.
 *
 */
var ReactiveFormsModule = /** @class */ (function () {
    function ReactiveFormsModule() {
    }
    ReactiveFormsModule.withConfig = function (opts) {
        return {
            ngModule: ReactiveFormsModule,
            providers: [{
                    provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                    useValue: opts.warnOnNgModelWithFormControl
                }]
        };
    };
    ReactiveFormsModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [REACTIVE_DRIVEN_DIRECTIVES],
                    providers: [FormBuilder, RadioControlRegistry],
                    exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
                },] }
    ];
    return ReactiveFormsModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=forms.js.map


/***/ }),

/***/ "./node_modules/@firebase/auth/dist/auth.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/auth.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_0__);
(function() {var g,aa=aa||{},k=this;function l(a){return"string"==typeof a}function ba(a){return"boolean"==typeof a}function ca(){}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return null===a}function fa(a){return"array"==da(a)}function ha(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function n(a){return"function"==da(a)}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=ka:r=la;return r.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}var na=Date.now||function(){return+new Date};function t(a,b){function c(){}c.prototype=b.prototype;a.nb=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ed=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function oa(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function pa(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}t(u,Error);u.prototype.name="CustomError";function qa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])}t(qa,u);qa.prototype.name="AssertionError";function ra(a,b){throw new qa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function sa(a,b){this.c=a;this.f=b;this.b=0;this.a=null}sa.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function ta(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function ua(){this.b=this.a=null}var wa=new sa(function(){return new va},function(a){a.reset()});ua.prototype.add=function(a,b){var c=wa.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function xa(){var a=ya,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function va(){this.next=this.b=this.a=null}va.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};va.prototype.reset=function(){this.next=this.b=this.a=null};var za=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(l(a))return l(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Aa(a,b){var c=a.length,d=l(a)?a.split(""):a;for(--c;0<=c;--c)c in d&&b.call(void 0,d[c],c,a)}
var Ba=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=l(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Ca=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};
function Da(a){a:{var b=Ea;for(var c=a.length,d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:l(a)?a.charAt(b):a[b]}function Fa(a,b){return 0<=za(a,b)}function Ga(a,b){b=za(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function w(a,b){var c=0;Aa(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Ha(a){return Array.prototype.concat.apply([],arguments)}
function Ia(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};function Ja(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var Ka=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function La(a){if(!Ma.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Na,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Oa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Pa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Qa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ra,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Sa,"&#0;"));return a}var Na=/&/g,Oa=/</g,Pa=/>/g,Qa=/"/g,Ra=/'/g,Sa=/\x00/g,Ma=/[\x00&<>"']/;function x(a,b){return-1!=a.indexOf(b)}function Ta(a,b){return a<b?-1:a>b?1:0};var Ua;a:{var Va=k.navigator;if(Va){var Wa=Va.userAgent;if(Wa){Ua=Wa;break a}}Ua=""}function y(a){return x(Ua,a)};function Xa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ya(a){for(var b in a)return!1;return!0}function Za(a){var b={},c;for(c in a)b[c]=a[c];return b}var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ab(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function bb(a){k.setTimeout(function(){throw a;},0)}var cb;
function db(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.vb;c.vb=null;a()}};return function(a){d.next={vb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};function eb(a,b){fb||gb();hb||(fb(),hb=!0);ya.add(a,b)}var fb;function gb(){if(k.Promise&&k.Promise.resolve){var a=k.Promise.resolve(void 0);fb=function(){a.then(ib)}}else fb=function(){var a=ib;!n(k.setImmediate)||k.Window&&k.Window.prototype&&!y("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(cb||(cb=db()),cb(a)):k.setImmediate(a)}}var hb=!1,ya=new ua;function ib(){for(var a;a=xa();){try{a.a.call(a.b)}catch(b){bb(b)}ta(wa,a)}hb=!1};function A(a,b){this.a=jb;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ca)try{var c=this;a.call(b,function(a){kb(c,lb,a)},function(a){if(!(a instanceof mb))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}kb(c,nb,a)})}catch(d){kb(this,nb,d)}}var jb=0,lb=2,nb=3;function ob(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}ob.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var pb=new sa(function(){return new ob},function(a){a.reset()});
function qb(a,b,c){var d=pb.get();d.g=a;d.b=b;d.f=c;return d}function B(a){if(a instanceof A)return a;var b=new A(ca);kb(b,lb,a);return b}function C(a){return new A(function(b,c){c(a)})}function rb(a,b,c){sb(a,b,c,null)||eb(ma(b,a))}function tb(a){return new A(function(b,c){var d=a.length,e=[];if(d)for(var f=function(a,c){d--;e[a]=c;0==d&&b(e)},h=function(a){c(a)},m=0,p;m<a.length;m++)p=a[m],rb(p,ma(f,m),h);else b(e)})}
function ub(a){return new A(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Cb:!0,value:f}:{Cb:!1,reason:f};0==c&&b(d)},f=0,h;f<a.length;f++)h=a[f],rb(h,ma(e,f,!0),ma(e,f,!1));else b(d)})}A.prototype.then=function(a,b,c){return vb(this,n(a)?a:null,n(b)?b:null,c)};oa(A);g=A.prototype;g.ia=function(a,b){a=qb(a,a,b);a.c=!0;wb(this,a);return this};g.s=function(a,b){return vb(this,null,a,b)};g.cancel=function(a){this.a==jb&&eb(function(){var b=new mb(a);xb(this,b)},this)};
function xb(a,b){if(a.a==jb)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,h=c.b;h&&(h.c||(d++,h.a==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(c.a==jb&&1==d?xb(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):yb(c),zb(c,e,nb,b)))}a.c=null}else kb(a,nb,b)}function wb(a,b){a.b||a.a!=lb&&a.a!=nb||Ab(a);a.f?a.f.next=b:a.b=b;a.f=b}
function vb(a,b,c,d){var e=qb(null,null,null);e.a=new A(function(a,h){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(z){h(z)}}:a;e.b=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof mb?h(b):a(e)}catch(z){h(z)}}:h});e.a.c=a;wb(a,e);return e.a}g.Nc=function(a){this.a=jb;kb(this,lb,a)};g.Oc=function(a){this.a=jb;kb(this,nb,a)};
function kb(a,b,c){a.a==jb&&(a===c&&(b=nb,c=new TypeError("Promise cannot resolve to itself")),a.a=1,sb(c,a.Nc,a.Oc,a)||(a.i=c,a.a=b,a.c=null,Ab(a),b!=nb||c instanceof mb||Bb(a,c)))}function sb(a,b,c,d){if(a instanceof A)return wb(a,qb(b||ca,c||null,d)),!0;if(pa(a))return a.then(b,c,d),!0;if(q(a))try{var e=a.then;if(n(e))return Cb(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Cb(a,b,c,d,e){function f(a){m||(m=!0,d.call(e,a))}function h(a){m||(m=!0,c.call(e,a))}var m=!1;try{b.call(a,h,f)}catch(p){f(p)}}function Ab(a){a.h||(a.h=!0,eb(a.Yb,a))}function yb(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}g.Yb=function(){for(var a;a=yb(this);)zb(this,a,this.a,this.i);this.h=!1};
function zb(a,b,c,d){if(c==nb&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Db(b,c,d);else try{b.c?b.g.call(b.f):Db(b,c,d)}catch(e){Eb.call(null,e)}ta(pb,b)}function Db(a,b,c){b==lb?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Bb(a,b){a.g=!0;eb(function(){a.g&&Eb.call(null,b)})}var Eb=bb;function mb(a){u.call(this,a)}t(mb,u);mb.prototype.name="cancel";function Fb(){0!=Gb&&(Hb[this[ia]||(this[ia]=++ja)]=this);this.pa=this.pa;this.ja=this.ja}var Gb=0,Hb={};Fb.prototype.pa=!1;function Ib(a){if(!a.pa&&(a.pa=!0,a.ua(),0!=Gb)){var b=a[ia]||(a[ia]=++ja);if(0!=Gb&&a.ja&&0<a.ja.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Hb[b]}}Fb.prototype.ua=function(){if(this.ja)for(;this.ja.length;)this.ja.shift()()};function Jb(a){Jb[" "](a);return a}Jb[" "]=ca;function Kb(a,b){var c=Lb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Mb=y("Opera"),Nb=y("Trident")||y("MSIE"),Ob=y("Edge"),Pb=Ob||Nb,Qb=y("Gecko")&&!(x(Ua.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),Rb=x(Ua.toLowerCase(),"webkit")&&!y("Edge");function Sb(){var a=k.document;return a?a.documentMode:void 0}var Tb;
a:{var Ub="",Vb=function(){var a=Ua;if(Qb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ob)return/Edge\/([\d\.]+)/.exec(a);if(Nb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Rb)return/WebKit\/(\S+)/.exec(a);if(Mb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Vb&&(Ub=Vb?Vb[1]:"");if(Nb){var Wb=Sb();if(null!=Wb&&Wb>parseFloat(Ub)){Tb=String(Wb);break a}}Tb=Ub}var Lb={};
function Xb(a){return Kb(a,function(){for(var b=0,c=Ka(String(Tb)).split("."),d=Ka(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var h=c[f]||"",m=d[f]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];m=/(\d*)(\D*)(.*)/.exec(m)||["","","",""];if(0==h[0].length&&0==m[0].length)break;b=Ta(0==h[1].length?0:parseInt(h[1],10),0==m[1].length?0:parseInt(m[1],10))||Ta(0==h[2].length,0==m[2].length)||Ta(h[2],m[2]);h=h[3];m=m[3]}while(0==b)}return 0<=b})}var Yb;var Zb=k.document;
Yb=Zb&&Nb?Sb()||("CSS1Compat"==Zb.compatMode?parseInt(Tb,10):5):void 0;var $b=Object.freeze||function(a){return a};var ac=!Nb||9<=Number(Yb),bc=Nb&&!Xb("9"),cc=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",ca,b);k.removeEventListener("test",ca,b);return a}();function D(a,b){this.type=a;this.b=this.target=b;this.Jb=!0}D.prototype.preventDefault=function(){this.Jb=!1};function dc(a,b){D.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Qb){a:{try{Jb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=
a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=l(a.pointerType)?a.pointerType:ec[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}t(dc,D);var ec=$b({2:"touch",3:"pen",4:"mouse"});dc.prototype.preventDefault=function(){dc.nb.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,bc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};dc.prototype.f=function(){return this.a};var fc="closure_listenable_"+(1E6*Math.random()|0),gc=0;function hc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++gc;this.na=this.Ia=!1}function ic(a){a.na=!0;a.listener=null;a.proxy=null;a.src=null;a.La=null};function jc(a){this.src=a;this.a={};this.b=0}jc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var h=kc(a,b,d,e);-1<h?(b=a[h],c||(b.Ia=!1)):(b=new hc(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};function lc(a,b){var c=b.type;c in a.a&&Ga(a.a[c],b)&&(ic(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function kc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.na&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1};var mc="closure_lm_"+(1E6*Math.random()|0),nc={},oc=0;function pc(a,b,c,d,e){if(d&&d.once)rc(a,b,c,d,e);else if(fa(b))for(var f=0;f<b.length;f++)pc(a,b[f],c,d,e);else c=sc(c),a&&a[fc]?tc(a,b,c,q(d)?!!d.capture:!!d,e):uc(a,b,c,!1,d,e)}
function uc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var h=q(e)?!!e.capture:!!e,m=vc(a);m||(a[mc]=m=new jc(a));c=m.add(b,c,d,h,f);if(!c.proxy){d=wc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)cc||(e=h),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(xc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");oc++}}
function wc(){var a=yc,b=ac?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function rc(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)rc(a,b[f],c,d,e);else c=sc(c),a&&a[fc]?zc(a,b,c,q(d)?!!d.capture:!!d,e):uc(a,b,c,!0,d,e)}
function E(a,b,c,d,e){if(fa(b))for(var f=0;f<b.length;f++)E(a,b[f],c,d,e);else(d=q(d)?!!d.capture:!!d,c=sc(c),a&&a[fc])?(a=a.m,b=String(b).toString(),b in a.a&&(f=a.a[b],c=kc(f,c,d,e),-1<c&&(ic(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=vc(a))&&(b=a.a[b.toString()],a=-1,b&&(a=kc(b,c,d,e)),(c=-1<a?b[a]:null)&&Ac(c))}
function Ac(a){if("number"!=typeof a&&a&&!a.na){var b=a.src;if(b&&b[fc])lc(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(xc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);oc--;(c=vc(b))?(lc(c,a),0==c.b&&(c.src=null,b[mc]=null)):ic(a)}}}function xc(a){return a in nc?nc[a]:nc[a]="on"+a}
function Bc(a,b,c,d){var e=!0;if(a=vc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.na&&(f=Cc(f,d),e=e&&!1!==f)}return e}function Cc(a,b){var c=a.listener,d=a.La||a.src;a.Ia&&Ac(a);return c.call(d,b)}
function yc(a,b){if(a.na)return!0;if(!ac){if(!b)a:{b=["window","event"];for(var c=k,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new dc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(h){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=Bc(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=Bc(d[e],a,!1,b),c=c&&f}return c}return Cc(a,
new dc(b,this))}function vc(a){a=a[mc];return a instanceof jc?a:null}var Dc="__closure_events_fn_"+(1E9*Math.random()>>>0);function sc(a){if(n(a))return a;a[Dc]||(a[Dc]=function(b){return a.handleEvent(b)});return a[Dc]};function F(){Fb.call(this);this.m=new jc(this);this.Rb=this;this.Ua=null}t(F,Fb);F.prototype[fc]=!0;F.prototype.addEventListener=function(a,b,c,d){pc(this,a,b,c,d)};F.prototype.removeEventListener=function(a,b,c,d){E(this,a,b,c,d)};
F.prototype.dispatchEvent=function(a){var b,c=this.Ua;if(c)for(b=[];c;c=c.Ua)b.push(c);c=this.Rb;var d=a.type||a;if(l(a))a=new D(a,c);else if(a instanceof D)a.target=a.target||c;else{var e=a;a=new D(d,c);ab(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var h=a.b=b[f];e=Ec(h,d,!0,a)&&e}h=a.b=c;e=Ec(h,d,!0,a)&&e;e=Ec(h,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)h=a.b=b[f],e=Ec(h,d,!1,a)&&e;return e};
F.prototype.ua=function(){F.nb.ua.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,ic(d[e]);delete a.a[c];a.b--}}this.Ua=null};function tc(a,b,c,d,e){a.m.add(String(b),c,!1,d,e)}function zc(a,b,c,d,e){a.m.add(String(b),c,!0,d,e)}
function Ec(a,b,c,d){b=a.m.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.na&&h.capture==c){var m=h.listener,p=h.La||h.src;h.Ia&&lc(a.m,h);e=!1!==m.call(p,d)&&e}}return e&&0!=d.Jb};function Fc(a,b,c){if(n(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)}function Gc(a){var b=null;return(new A(function(c,d){b=Fc(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).s(function(a){k.clearTimeout(b);throw a;})};function Hc(a){if(a.S&&"function"==typeof a.S)return a.S();if(l(a))return a.split("");if(ha(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Ic(a){if(a.U&&"function"==typeof a.U)return a.U();if(!a.S||"function"!=typeof a.S){if(ha(a)||l(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function Jc(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ha(a)||l(a))v(a,b,void 0);else for(var c=Ic(a),d=Hc(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function Kc(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Kc)for(c=a.U(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}g=Kc.prototype;g.S=function(){Lc(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};g.U=function(){Lc(this);return this.a.concat()};
g.clear=function(){this.b={};this.c=this.a.length=0};function Lc(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Mc(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Mc(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}g.get=function(a,b){return Mc(this.b,a)?this.b[a]:b};g.set=function(a,b){Mc(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
g.forEach=function(a,b){for(var c=this.U(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Mc(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Nc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Oc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function Pc(a,b){this.b=this.m=this.c="";this.i=null;this.h=this.g="";this.f=!1;if(a instanceof Pc){this.f=void 0!==b?b:a.f;Rc(this,a.c);this.m=a.m;this.b=a.b;Sc(this,a.i);this.g=a.g;b=a.a;var c=new Tc;c.c=b.c;b.a&&(c.a=new Kc(b.a),c.b=b.b);Uc(this,c);this.h=a.h}else a&&(c=String(a).match(Nc))?(this.f=!!b,Rc(this,c[1]||"",!0),this.m=Vc(c[2]||""),this.b=Vc(c[3]||"",!0),Sc(this,c[4]),this.g=Vc(c[5]||"",!0),Uc(this,c[6]||"",!0),this.h=Vc(c[7]||"")):(this.f=!!b,this.a=new Tc(null,this.f))}
Pc.prototype.toString=function(){var a=[],b=this.c;b&&a.push(Wc(b,Xc,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.m)&&a.push(Wc(b,Xc,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.i,null!=c&&a.push(":",String(c));if(c=this.g)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Wc(c,"/"==c.charAt(0)?Yc:Zc,!0));(c=this.a.toString())&&a.push("?",c);(c=this.h)&&a.push("#",Wc(c,$c));return a.join("")};
function Rc(a,b,c){a.c=c?Vc(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))}function Sc(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.i=b}else a.i=null}function Uc(a,b,c){b instanceof Tc?(a.a=b,ad(a.a,a.f)):(c||(b=Wc(b,bd)),a.a=new Tc(b,a.f))}function G(a,b,c){a.a.set(b,c)}function cd(a,b){return a.a.get(b)}function dd(a){return a instanceof Pc?new Pc(a):new Pc(a,void 0)}function ed(a,b){var c=new Pc(null,void 0);Rc(c,"https");a&&(c.b=a);b&&(c.g=b);return c}
function Vc(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Wc(a,b,c){return l(a)?(a=encodeURI(a).replace(b,fd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fd(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xc=/[#\/\?@]/g,Zc=/[#\?:]/g,Yc=/[#\?]/g,bd=/[#\?@]/g,$c=/#/g;function Tc(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}
function gd(a){a.a||(a.a=new Kc,a.b=0,a.c&&Oc(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function hd(a){var b=Ic(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Tc(null,void 0);a=Hc(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];fa(f)?id(c,e,f):c.add(e,f)}return c}g=Tc.prototype;g.add=function(a,b){gd(this);this.c=null;a=jd(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};
function kd(a,b){gd(a);b=jd(a,b);Mc(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Mc(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Lc(a)))}g.clear=function(){this.a=this.c=null;this.b=0};function ld(a,b){gd(a);b=jd(a,b);return Mc(a.a.b,b)}g.forEach=function(a,b){gd(this);this.a.forEach(function(c,d){v(c,function(c){a.call(b,c,d,this)},this)},this)};g.U=function(){gd(this);for(var a=this.a.S(),b=this.a.U(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
g.S=function(a){gd(this);var b=[];if(l(a))ld(this,a)&&(b=Ha(b,this.a.get(jd(this,a))));else{a=this.a.S();for(var c=0;c<a.length;c++)b=Ha(b,a[c])}return b};g.set=function(a,b){gd(this);this.c=null;a=jd(this,a);ld(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};g.get=function(a,b){a=a?this.S(a):[];return 0<a.length?String(a[0]):b};function id(a,b,c){kd(a,b);0<c.length&&(a.c=null,a.a.set(jd(a,b),Ia(c)),a.b+=c.length)}
g.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.U(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.S(d);for(var f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}}return this.c=a.join("&")};function jd(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function ad(a,b){b&&!a.f&&(gd(a),a.c=null,a.a.forEach(function(a,b){var c=b.toLowerCase();b!=c&&(kd(this,b),id(this,c,a))},a));a.f=b};var md=!Nb||9<=Number(Yb);function nd(){this.a="";this.b=od}nd.prototype.ma=!0;nd.prototype.la=function(){return this.a};nd.prototype.toString=function(){return"Const{"+this.a+"}"};function pd(a){if(a instanceof nd&&a.constructor===nd&&a.b===od)return a.a;ra("expected object of type Const, got '"+a+"'");return"type_error:Const"}var od={};function qd(a){var b=new nd;b.a=a;return b}qd("");function rd(){this.a="";this.b=sd}rd.prototype.ma=!0;rd.prototype.la=function(){return this.a};rd.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function td(a){if(a instanceof rd&&a.constructor===rd&&a.b===sd)return a.a;ra("expected object of type TrustedResourceUrl, got '"+a+"' of type "+da(a));return"type_error:TrustedResourceUrl"}
function ud(a,b){var c=pd(a);if(!vd.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(wd,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));a=b[e];return a instanceof nd?pd(a):encodeURIComponent(String(a))});return xd(a)}var wd=/%{(\w+)}/g,vd=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank#/i,sd={};
function xd(a){var b=new rd;b.a=a;return b};function yd(){this.a="";this.b=zd}yd.prototype.ma=!0;yd.prototype.la=function(){return this.a};yd.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Ad(a){if(a instanceof yd&&a.constructor===yd&&a.b===zd)return a.a;ra("expected object of type SafeUrl, got '"+a+"' of type "+da(a));return"type_error:SafeUrl"}var Bd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Cd(a){if(a instanceof yd)return a;a=a.ma?a.la():String(a);Bd.test(a)||(a="about:invalid#zClosurez");return Dd(a)}var zd={};function Dd(a){var b=new yd;b.a=a;return b}Dd("about:blank");function Ed(){this.a="";this.b=Fd}Ed.prototype.ma=!0;Ed.prototype.la=function(){return this.a};Ed.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Gd(a){if(a instanceof Ed&&a.constructor===Ed&&a.b===Fd)return a.a;ra("expected object of type SafeHtml, got '"+a+"' of type "+da(a));return"type_error:SafeHtml"}var Fd={};function Hd(a){var b=new Ed;b.a=a;return b}Hd("<!DOCTYPE html>");Hd("");Hd("<br>");function Id(a){var b=document;return l(a)?b.getElementById(a):a}function Jd(a,b){Xa(b,function(b,d){b&&b.ma&&(b=b.la());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Kd.hasOwnProperty(d)?a.setAttribute(Kd[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Kd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Ld(a,b,c){var d=arguments,e=document,f=String(d[0]),h=d[1];if(!md&&h&&(h.name||h.type)){f=["<",f];h.name&&f.push(' name="',La(h.name),'"');if(h.type){f.push(' type="',La(h.type),'"');var m={};ab(m,h);delete m.type;h=m}f.push(">");f=f.join("")}f=e.createElement(f);h&&(l(h)?f.className=h:fa(h)?f.className=h.join(" "):Jd(f,h));2<d.length&&Md(e,f,d);return f}
function Md(a,b,c){function d(c){c&&b.appendChild(l(c)?a.createTextNode(c):c)}for(var e=2;e<c.length;e++){var f=c[e];!ha(f)||q(f)&&0<f.nodeType?d(f):v(Nd(f)?Ia(f):f,d)}}function Nd(a){if(a&&"number"==typeof a.length){if(q(a))return"function"==typeof a.item||"string"==typeof a.item;if(n(a))return"function"==typeof a.item}return!1};function Od(a){var b=[];Pd(new Qd,a,b);return b.join("")}function Qd(){}
function Pd(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(fa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Pd(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Rd(d,c),c.push(":"),Pd(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Rd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Sd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Td=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function Rd(a,b){b.push('"',a.replace(Td,function(a){var b=Sd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Sd[a]=b);return b}),'"')};function Ud(){var a=H();return Nb&&!!Yb&&11==Yb||/Edge\/\d+/.test(a)}function Vd(){return k.window&&k.window.location.href||self&&self.location&&self.location.href||""}function Wd(a,b){b=b||k.window;var c="about:blank";a&&(c=Ad(Cd(a)));b.location.href=c}function Xd(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<Xd(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function Yd(){var a=H();a=Zd(a)!=$d?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Nb||!Yb||9<Yb}function ae(a){a=(a||H()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function be(a){a=a||k.window;try{a.close()}catch(b){}}
function ce(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=H().toLowerCase();d&&(b.target=d,x(c,"crios/")&&(b.target="_blank"));Zd(H())==de&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof yd?c:Cd("undefined"!=typeof c.href?c.href:String(c));c=a.target||c.target;e=[];
for(h in a)switch(h){case "width":case "height":case "top":case "left":e.push(h+"="+a[h]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(h+"="+(a[h]?1:0))}var h=e.join(",");(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c?(h=d.document.createElement("A"),b instanceof yd||b instanceof yd||(b=b.ma?b.la():String(b),Bd.test(b)||(b="about:invalid#zClosurez"),b=Dd(b)),h.href=Ad(b),h.setAttribute("target",c),a.noreferrer&&
h.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,d,1),h.dispatchEvent(a),h={}):a.noreferrer?(h=d.open("",c,h),a=Ad(b),h&&(Pb&&x(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),h.opener=null,qd("b/12014412, meta tag with sanitized URL"),a='<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+La(a)+'">',a=Hd(a),h.document.write(Gd(a)),h.document.close())):(h=d.open(Ad(b),c,h))&&a.noopener&&(h.opener=null);if(h)try{h.focus()}catch(m){}return h}
function ee(a){return new A(function(b){function c(){Gc(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var fe=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;function ge(){var a=null;return(new A(function(b){"complete"==k.document.readyState?b():(a=function(){b()},rc(window,"load",a))})).s(function(b){E(window,"load",a);throw b;})}
function he(){return ie(void 0)?ge().then(function(){return new A(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):C(Error("Cordova must run in an Android or iOS file scheme."))}function ie(a){a=a||H();return!("file:"!==je()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function ke(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function le(){return"object"!==typeof k.window&&"function"===typeof k.importScripts}function me(){return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.hasOwnProperty("node")?"Node":le()?"Worker":"Browser"}function ne(){var a=me();return"ReactNative"===a||"Node"===a}function oe(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}var de="Firefox",$d="Chrome";
function Zd(a){var b=a.toLowerCase();if(x(b,"opera/")||x(b,"opr/")||x(b,"opios/"))return"Opera";if(x(b,"iemobile"))return"IEMobile";if(x(b,"msie")||x(b,"trident/"))return"IE";if(x(b,"edge/"))return"Edge";if(x(b,"firefox/"))return de;if(x(b,"silk/"))return"Silk";if(x(b,"blackberry"))return"Blackberry";if(x(b,"webos"))return"Webos";if(!x(b,"safari/")||x(b,"chrome/")||x(b,"crios/")||x(b,"android"))if(!x(b,"chrome/")&&!x(b,"crios/")||x(b,"edge/")){if(x(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return $d;else return"Safari";return"Other"}var pe={Uc:"FirebaseCore-web",Wc:"FirebaseUI-web"};function qe(a,b){b=b||[];var c=[],d={},e;for(e in pe)d[pe[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=me();"Browser"===c?(d=H(),c=Zd(d)):"Worker"===c&&(d=H(),c=Zd(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function H(){return k.navigator&&k.navigator.userAgent||""}
function I(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function re(){try{var a=k.localStorage,b=se();if(a)return a.setItem(b,"1"),a.removeItem(b),Ud()?!!k.indexedDB:!0}catch(c){return le()&&!!k.indexedDB}return!1}function te(){return(ue()||"chrome-extension:"===je()||ie())&&!ne()&&re()&&!le()}function ue(){return"http:"===je()||"https:"===je()}function je(){return k.location&&k.location.protocol||null}
function ve(a){a=a||H();return ae(a)||Zd(a)==de?!1:!0}function we(a){return"undefined"===typeof a?null:Od(a)}function xe(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function ye(a){if(null!==a)return JSON.parse(a)}function se(a){return a?a:Math.floor(1E9*Math.random()).toString()}function ze(a){a=a||H();return"Safari"==Zd(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Ae(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function Be(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=H();b=me();this.b=ae(a)||"ReactNative"===b}
Be.prototype.get=function(){var a=k.navigator;return(a&&"boolean"===typeof a.onLine&&(ue()||"chrome-extension:"===je()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function Ce(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function De(){var a=k.document,b=null;return Ce()||!a?B():(new A(function(c){b=function(){Ce()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).s(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function Ee(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function Fe(){return!(!I("fireauth.oauthhelper",k)&&!I("fireauth.iframe",k))};var Ge={};function He(a){Ge[a]||(Ge[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var Ie;try{var Je={};Object.defineProperty(Je,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Je,"abcd",{configurable:!0,enumerable:!0,value:2});Ie=2==Je.abcd}catch(a){Ie=!1}function J(a,b,c){Ie?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function K(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&J(a,c,b[c])}function Ke(a){var b={};K(b,a);return b}function Le(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function Me(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function Ne(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)J(b,c,Ne(a[c]))}return b};function Oe(a){var b={},c=a[Pe],d=a[Qe];a=a[Re];if(!a||a!=Se&&!c)throw Error("Invalid provider user info!");b[Te]=d||null;b[Ue]=c||null;J(this,Ve,a);J(this,We,Ne(b))}var Se="EMAIL_SIGNIN",Pe="email",Qe="newEmail",Re="requestType",Ue="email",Te="fromEmail",We="data",Ve="operation";function L(a,b){this.code=Xe+a;this.message=b||Ye[a]||""}t(L,Error);L.prototype.D=function(){return{code:this.code,message:this.message}};L.prototype.toJSON=function(){return this.D()};function Ze(a){var b=a&&a.code;return b?new L(b.substring(Xe.length),a.message):null}
var Xe="auth/",Ye={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
"invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.",
"invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
"invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.",
"auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.",
"missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
"network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
"operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.",
"quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.",
"unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.",
"user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};function $e(a){var b=a[af];if("undefined"===typeof b)throw new L("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new L("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[bf];if(c&&"object"===typeof c){b=c[cf];var d=c[df];c=c[ef];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new L("argument-error",df+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new L("argument-error",ef+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new L("argument-error",cf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new L("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new L("argument-error",bf+" property must be a non null object when specified.");this.f=null;if((b=a[ff])&&"object"===
typeof b)if(b=b[gf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new L("argument-error",gf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new L("argument-error",ff+" property must be a non null object when specified.");a=a[hf];if("undefined"!==typeof a&&"boolean"!==typeof a)throw new L("argument-error",hf+" property must be a boolean when specified.");this.c=!!a}
var bf="android",hf="handleCodeInApp",ff="iOS",af="url",df="installApp",ef="minimumVersion",cf="packageName",gf="bundleId";function jf(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;for(var c in b)null===b[c]&&delete b[c];return b};function kf(a){return Ba(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var lf=null,mf=null;function nf(a){var b="";of(a,function(a){b+=String.fromCharCode(a)});return b}function of(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=mf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}pf();for(var d=0;;){var e=c(-1),f=c(0),h=c(64),m=c(64);if(64===m&&-1===e)break;b(e<<2|f>>4);64!=h&&(b(f<<4&240|h>>2),64!=m&&b(h<<6&192|m))}}
function pf(){if(!lf){lf={};mf={};for(var a=0;65>a;a++)lf[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),mf[lf[a]]=a,62<=a&&(mf["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};function qf(a){this.c=a.sub;na();this.a=a.provider_id||a.firebase&&a.firebase.sign_in_provider||null;this.b=!!a.is_anonymous||"anonymous"==this.a}qf.prototype.f=function(){return this.b};function rf(a){return(a=sf(a))&&a.sub&&a.iss&&a.aud&&a.exp?new qf(a):null}function sf(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{return JSON.parse(nf(a))}catch(d){}return null};var tf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),uf=["client_id","response_type","scope","redirect_uri","state"],vf={Vc:{Ma:"locale",Ba:500,Aa:600,Na:"facebook.com",gb:uf},Xc:{Ma:null,Ba:500,Aa:620,Na:"github.com",gb:uf},Yc:{Ma:"hl",Ba:515,Aa:680,Na:"google.com",gb:uf},dd:{Ma:"lang",Ba:485,Aa:705,Na:"twitter.com",gb:tf}};function wf(a){for(var b in vf)if(vf[b].Na==a)return vf[b];return null};function xf(a){var b={};b["facebook.com"]=yf;b["google.com"]=zf;b["github.com"]=Af;b["twitter.com"]=Bf;var c=a&&a[Cf];try{if(c)return b[c]?new b[c](a):new Df(a);if("undefined"!==typeof a[Ef])return new Ff(a)}catch(d){}return null}var Ef="idToken",Cf="providerId";
function Ff(a){var b=a[Cf];if(!b&&a[Ef]){var c=rf(a[Ef]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);J(this,"providerId",b);J(this,"isNewUser",c)}function Df(a){Ff.call(this,a);a=ye(a.rawUserInfo||"{}");J(this,"profile",Ne(a||{}))}t(Df,Ff);
function yf(a){Df.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}t(yf,Df);function Af(a){Df.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");J(this,"username",this.profile&&this.profile.login||null)}t(Af,Df);function zf(a){Df.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}t(zf,Df);
function Bf(a){Df.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");J(this,"username",a.screenName||null)}t(Bf,Df);function Gf(a){this.a=dd(a)};function Hf(a){var b=dd(a),c=cd(b,"link"),d=cd(dd(c),"link");b=cd(b,"deep_link_id");return cd(dd(b),"link")||b||d||c||a};function If(a,b){return a.then(function(a){if(a[M]){var c=rf(a[M]);if(!c||b!=c.c)throw new L("user-mismatch");return a}throw new L("user-mismatch");}).s(function(a){throw a&&a.code&&a.code==Xe+"user-not-found"?new L("user-mismatch"):a;})}
function Jf(a,b,c){if(b.idToken||b.accessToken)b.idToken&&J(this,"idToken",b.idToken),b.accessToken&&J(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)J(this,"accessToken",b.oauthToken),J(this,"secret",b.oauthTokenSecret);else throw new L("internal-error","failed to construct a credential");J(this,"providerId",a);J(this,"signInMethod",c)}Jf.prototype.ya=function(a){return Kf(a,Lf(this))};Jf.prototype.c=function(a,b){var c=Lf(this);c.idToken=b;return Mf(a,c)};
Jf.prototype.f=function(a,b){var c=Lf(this);return If(Nf(a,c),b)};function Lf(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:hd(b).toString(),requestUri:"http://localhost"}}
Jf.prototype.D=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};function Of(a,b){this.Dc=b||[];K(this,{providerId:a,isOAuthProvider:!0});this.xb={};this.bb=(wf(a)||{}).Ma||null;this.Za=null}Of.prototype.Da=function(a){this.xb=Za(a);return this};function N(a){Of.call(this,a,uf);this.a=[]}t(N,Of);
N.prototype.ta=function(a){Fa(this.a,a)||this.a.push(a);return this};N.prototype.Db=function(){return Ia(this.a)};N.prototype.credential=function(a,b){if(!a&&!b)throw new L("argument-error","credential failed: must provide the ID token and/or the access token.");return new Jf(this.providerId,{idToken:a||null,accessToken:b||null},this.providerId)};function Pf(){N.call(this,"facebook.com")}t(Pf,N);J(Pf,"PROVIDER_ID","facebook.com");J(Pf,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function Qf(a){if(!a)throw new L("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new Pf).credential(null,b)}function Rf(){N.call(this,"github.com")}t(Rf,N);J(Rf,"PROVIDER_ID","github.com");J(Rf,"GITHUB_SIGN_IN_METHOD","github.com");function Sf(a){if(!a)throw new L("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;q(a)&&(b=a.accessToken);return(new Rf).credential(null,b)}
function Tf(){N.call(this,"google.com");this.ta("profile")}t(Tf,N);J(Tf,"PROVIDER_ID","google.com");J(Tf,"GOOGLE_SIGN_IN_METHOD","google.com");function Uf(a,b){var c=a;q(a)&&(c=a.idToken,b=a.accessToken);return(new Tf).credential(c,b)}function Vf(){Of.call(this,"twitter.com",tf)}t(Vf,Of);J(Vf,"PROVIDER_ID","twitter.com");J(Vf,"TWITTER_SIGN_IN_METHOD","twitter.com");
function Wf(a,b){var c=a;q(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new L("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Jf("twitter.com",c,"twitter.com")}function Xf(a,b,c){this.a=a;this.b=b;J(this,"providerId","password");J(this,"signInMethod",c===O.EMAIL_LINK_SIGN_IN_METHOD?O.EMAIL_LINK_SIGN_IN_METHOD:O.EMAIL_PASSWORD_SIGN_IN_METHOD)}
Xf.prototype.ya=function(a){return this.signInMethod==O.EMAIL_LINK_SIGN_IN_METHOD?P(a,Yf,{email:this.a,oobCode:this.b}):P(a,Zf,{email:this.a,password:this.b})};Xf.prototype.c=function(a,b){return this.signInMethod==O.EMAIL_LINK_SIGN_IN_METHOD?P(a,$f,{idToken:b,email:this.a,oobCode:this.b}):P(a,ag,{idToken:b,email:this.a,password:this.b})};Xf.prototype.f=function(a,b){return If(this.ya(a),b)};Xf.prototype.D=function(){return{email:this.a,password:this.b,signInMethod:this.signInMethod}};
function O(){K(this,{providerId:"password",isOAuthProvider:!1})}function bg(a,b){b=cg(b);if(!b)throw new L("argument-error","Invalid email link!");return new Xf(a,b,O.EMAIL_LINK_SIGN_IN_METHOD)}function cg(a){a=Hf(a);a=new Gf(a);var b=cd(a.a,"oobCode")||null;return"signIn"===(cd(a.a,"mode")||null)&&b?b:null}K(O,{PROVIDER_ID:"password"});K(O,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});K(O,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});
function dg(a){if(!(a.Sa&&a.Ra||a.Fa&&a.$))throw new L("internal-error");this.a=a;J(this,"providerId","phone");J(this,"signInMethod","phone")}dg.prototype.ya=function(a){return a.Ta(eg(this))};dg.prototype.c=function(a,b){var c=eg(this);c.idToken=b;return P(a,fg,c)};dg.prototype.f=function(a,b){var c=eg(this);c.operation="REAUTH";a=P(a,gg,c);return If(a,b)};
dg.prototype.D=function(){var a={providerId:"phone"};this.a.Sa&&(a.verificationId=this.a.Sa);this.a.Ra&&(a.verificationCode=this.a.Ra);this.a.Fa&&(a.temporaryProof=this.a.Fa);this.a.$&&(a.phoneNumber=this.a.$);return a};function eg(a){return a.a.Fa&&a.a.$?{temporaryProof:a.a.Fa,phoneNumber:a.a.$}:{sessionInfo:a.a.Sa,code:a.a.Ra}}
function hg(a){try{this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth()}catch(b){throw new L("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}K(this,{providerId:"phone",isOAuthProvider:!1})}
hg.prototype.Ta=function(a,b){var c=this.a.b;return B(b.verify()).then(function(d){if(!l(d))throw new L("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return ig(c,{phoneNumber:a,recaptchaToken:d}).then(function(a){"function"===typeof b.reset&&b.reset();return a},function(a){"function"===typeof b.reset&&b.reset();throw a;});default:throw new L("argument-error",
'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};function jg(a,b){if(!a)throw new L("missing-verification-id");if(!b)throw new L("missing-verification-code");return new dg({Sa:a,Ra:b})}K(hg,{PROVIDER_ID:"phone"});K(hg,{PHONE_SIGN_IN_METHOD:"phone"});
function kg(a){if(a.temporaryProof&&a.phoneNumber)return new dg({Fa:a.temporaryProof,$:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return Uf(a,c);case "facebook.com":return Qf(c);case "github.com":return Sf(c);case "twitter.com":return Wf(c,d);default:return(new N(b)).credential(a,c)}}catch(e){return null}}
function lg(a){if(!a.isOAuthProvider)throw new L("invalid-oauth-provider");};function mg(a,b,c,d,e){this.b=a;this.c=b||null;this.f=c||null;this.g=d||null;this.a=e||null;if(this.f||this.a){if(this.f&&this.a)throw new L("invalid-auth-event");if(this.f&&!this.g)throw new L("invalid-auth-event");}else throw new L("invalid-auth-event");}mg.prototype.D=function(){return{type:this.b,eventId:this.c,urlResponse:this.f,sessionId:this.g,error:this.a&&this.a.D()}};function ng(a){a=a||{};return a.type?new mg(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Ze(a.error)):null};function og(){this.b=null;this.a=[]}var pg=null;og.prototype.subscribe=function(a){var b=this;this.a.push(a);this.b||(this.b=function(a){for(var c=0;c<b.a.length;c++)b.a[c](a)},a=I("universalLinks.subscribe",k),"function"===typeof a&&a(null,this.b))};og.prototype.unsubscribe=function(a){w(this.a,function(b){return b==a})};function qg(a){var b="unauthorized-domain",c=void 0,d=dd(a);a=d.b;d=d.c;"chrome-extension"==d?c=Ja("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Ja("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
L.call(this,b,c)}t(qg,L);function rg(a,b,c){L.call(this,a,c);a=b||{};a.yb&&J(this,"email",a.yb);a.$&&J(this,"phoneNumber",a.$);a.credential&&J(this,"credential",a.credential)}t(rg,L);rg.prototype.D=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.D();b&&ab(a,b);return a};rg.prototype.toJSON=function(){return this.D()};
function sg(a){if(a.code){var b=a.code||"";0==b.indexOf(Xe)&&(b=b.substring(Xe.length));var c={credential:kg(a)};if(a.email)c.yb=a.email;else if(a.phoneNumber)c.$=a.phoneNumber;else return new L(b,a.message||void 0);return new rg(b,c,a.message)}return null};var tg=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function ug(){}ug.prototype.c=null;function vg(a){return a.c||(a.c=a.b())};var wg;function xg(){}t(xg,ug);xg.prototype.a=function(){var a=yg(this);return a?new ActiveXObject(a):new XMLHttpRequest};xg.prototype.b=function(){var a={};yg(this)&&(a[0]=!0,a[1]=!0);return a};
function yg(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}wg=new xg;function zg(){}t(zg,ug);zg.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Ag;throw Error("Unsupported browser");};zg.prototype.b=function(){return{}};
function Ag(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText="";this.a.onload=r(this.ec,this);this.a.onerror=r(this.Eb,this);this.a.onprogress=r(this.fc,this);this.a.ontimeout=r(this.ic,this)}g=Ag.prototype;g.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
g.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};g.abort=function(){this.a.abort()};g.setRequestHeader=function(){};g.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};g.ec=function(){this.status=200;this.responseText=this.a.responseText;Bg(this,4)};g.Eb=function(){this.status=500;this.responseText="";Bg(this,4)};g.ic=function(){this.Eb()};
g.fc=function(){this.status=200;Bg(this,1)};function Bg(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}g.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function Cg(a,b,c){this.reset(a,b,c,void 0,void 0)}Cg.prototype.a=null;var Dg=0;Cg.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Dg++;d||na();delete this.a};function Eg(a){this.f=a;this.b=this.c=this.a=null}function Fg(a,b){this.name=a;this.value=b}Fg.prototype.toString=function(){return this.name};var Gg=new Fg("SEVERE",1E3),Hg=new Fg("WARNING",900),Ig=new Fg("CONFIG",700),Jg=new Fg("FINE",500);function Kg(a){if(a.c)return a.c;if(a.a)return Kg(a.a);ra("Root logger has no level set.");return null}Eg.prototype.log=function(a,b,c){if(a.value>=Kg(this).value)for(n(b)&&(b=b()),a=new Cg(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Lg={},Mg=null;
function Ng(a){Mg||(Mg=new Eg(""),Lg[""]=Mg,Mg.c=Ig);var b;if(!(b=Lg[a])){b=new Eg(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Ng(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Lg[a]=b}return b};function Og(a,b){a&&a.log(Jg,b,void 0)};function Pg(a){this.f=a}t(Pg,ug);Pg.prototype.a=function(){return new Qg(this.f)};Pg.prototype.b=function(a){return function(){return a}}({});function Qg(a){F.call(this);this.i=a;this.readyState=Rg;this.status=0;this.responseText=this.statusText="";this.onreadystatechange=null;this.g=new Headers;this.b=null;this.h="GET";this.c="";this.a=!1;this.f=Ng("goog.net.FetchXmlHttp")}t(Qg,F);var Rg=0;g=Qg.prototype;
g.open=function(a,b){if(this.readyState!=Rg)throw this.abort(),Error("Error reopening a connection");this.h=a;this.c=b;this.readyState=1;Sg(this)};g.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.g,method:this.h,credentials:void 0,cache:void 0};a&&(b.body=a);this.i.fetch(new Request(this.c,b)).then(this.hc.bind(this),this.Fb.bind(this))};
g.abort=function(){this.responseText="";this.g=new Headers;this.status=0;1<=this.readyState&&this.a&&4!=this.readyState&&(this.readyState=4,this.a=!1,Sg(this));this.readyState=Rg};g.hc=function(a){this.a&&(this.b||(this.b=a.headers,this.readyState=2,Sg(this)),this.a&&(this.readyState=3,Sg(this),this.a&&a.text().then(this.gc.bind(this,a),this.Fb.bind(this))))};g.gc=function(a,b){this.a&&(this.status=a.status,this.statusText=a.statusText,this.responseText=b,this.readyState=4,Sg(this))};
g.Fb=function(a){var b=this.f;b&&b.log(Hg,"Failed to fetch url "+this.c,a instanceof Error?a:Error(a));this.a&&(this.readyState=4,Sg(this))};g.setRequestHeader=function(a,b){this.g.append(a,b)};g.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.f)&&a.log(Hg,"Attempting to get response header but no headers have been received for url: "+this.c,void 0),"")};
g.getAllResponseHeaders=function(){if(!this.b){var a=this.f;a&&a.log(Hg,"Attempting to get all response headers but no headers have been received for url: "+this.c,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Sg(a){a.onreadystatechange&&a.onreadystatechange.call(a)};function Tg(a){F.call(this);this.headers=new Kc;this.C=a||null;this.c=!1;this.w=this.a=null;this.h=this.N=this.l="";this.f=this.I=this.i=this.G=!1;this.g=0;this.u=null;this.o=Ug;this.v=this.O=!1}t(Tg,F);var Ug="";Tg.prototype.b=Ng("goog.net.XhrIo");var Vg=/^https?$/i,Wg=["POST","PUT"];
function Xg(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.N=c;a.G=!1;a.c=!0;a.a=a.C?a.C.a():wg.a();a.w=a.C?vg(a.C):vg(wg);a.a.onreadystatechange=r(a.Ib,a);try{Og(a.b,Yg(a,"Opening Xhr")),a.I=!0,a.a.open(c,String(b),!0),a.I=!1}catch(h){Og(a.b,Yg(a,"Error opening Xhr: "+h.message));Zg(a,h);return}b=d||"";var f=new Kc(a.headers);e&&Jc(e,function(a,b){f.set(b,a)});e=Da(f.U());d=k.FormData&&b instanceof
k.FormData;!Fa(Wg,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},a);a.o&&(a.a.responseType=a.o);"withCredentials"in a.a&&a.a.withCredentials!==a.O&&(a.a.withCredentials=a.O);try{$g(a),0<a.g&&(a.v=ah(a.a),Og(a.b,Yg(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.v)),a.v?(a.a.timeout=a.g,a.a.ontimeout=r(a.Ga,a)):a.u=Fc(a.Ga,a.g,a)),Og(a.b,Yg(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(h){Og(a.b,
Yg(a,"Send error: "+h.message)),Zg(a,h)}}function ah(a){return Nb&&Xb(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ea(a){return"content-type"==a.toLowerCase()}g=Tg.prototype;g.Ga=function(){"undefined"!=typeof aa&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Og(this.b,Yg(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function Zg(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;bh(a);ch(a)}
function bh(a){a.G||(a.G=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}g.abort=function(){this.a&&this.c&&(Og(this.b,Yg(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),ch(this))};g.ua=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),ch(this,!0));Tg.nb.ua.call(this)};g.Ib=function(){this.pa||(this.I||this.i||this.f?dh(this):this.wc())};g.wc=function(){dh(this)};
function dh(a){if(a.c&&"undefined"!=typeof aa)if(a.w[1]&&4==eh(a)&&2==fh(a))Og(a.b,Yg(a,"Local request error detected and ignored"));else if(a.i&&4==eh(a))Fc(a.Ib,0,a);else if(a.dispatchEvent("readystatechange"),4==eh(a)){Og(a.b,Yg(a,"Request complete"));a.c=!1;try{var b=fh(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Nc)[1]||null;if(!f&&k.self&&k.self.location){var h=k.self.location.protocol;
f=h.substr(0,h.length-1)}e=!Vg.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var m=2<eh(a)?a.a.statusText:""}catch(p){Og(a.b,"Can not get status: "+p.message),m=""}a.h=m+" ["+fh(a)+"]";bh(a)}}finally{ch(a)}}}function ch(a,b){if(a.a){$g(a);var c=a.a,d=a.w[0]?ca:null;a.a=null;a.w=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(Gg,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function $g(a){a.a&&a.v&&(a.a.ontimeout=null);a.u&&(k.clearTimeout(a.u),a.u=null)}function eh(a){return a.a?a.a.readyState:0}function fh(a){try{return 2<eh(a)?a.a.status:-1}catch(b){return-1}}function gh(a){try{return a.a?a.a.responseText:""}catch(b){return Og(a.b,"Can not get responseText: "+b.message),""}}
g.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.o){case Ug:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Gg,"Response type "+this.o+" is not supported on this browser",void 0);return null}catch(b){return Og(this.b,"Can not get response: "+b.message),null}};function Yg(a,b){return b+" ["+a.N+" "+a.l+" "+fh(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function hh(a,b){this.g=[];this.v=a;this.u=b||null;this.f=this.a=!1;this.c=void 0;this.l=this.w=this.i=!1;this.h=0;this.b=null;this.m=0}hh.prototype.cancel=function(a){if(this.a)this.c instanceof hh&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.m--,0>=b.m&&b.cancel())}this.v?this.v.call(this.u,this):this.l=!0;this.a||(a=new ih(this),jh(this),kh(this,!1,a))}};hh.prototype.o=function(a,b){this.i=!1;kh(this,a,b)};function kh(a,b,c){a.a=!0;a.c=c;a.f=!b;lh(a)}
function jh(a){if(a.a){if(!a.l)throw new mh(a);a.l=!1}}hh.prototype.C=function(){jh(this);kh(this,!0,null)};function nh(a,b){oh(a,null,b,void 0)}function oh(a,b,c,d){a.g.push([b,c,d]);a.a&&lh(a)}hh.prototype.then=function(a,b,c){var d,e,f=new A(function(a,b){d=a;e=b});oh(this,d,function(a){a instanceof ih?f.cancel():e(a)});return f.then(a,b,c)};oa(hh);function ph(a){return Ca(a.g,function(a){return n(a[1])})}
function lh(a){if(a.h&&a.a&&ph(a)){var b=a.h,c=qh[b];c&&(k.clearTimeout(c.a),delete qh[b]);a.h=0}a.b&&(a.b.m--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],h=e[1];e=e[2];if(f=a.f?h:f)try{var m=f.call(e||a.u,b);void 0!==m&&(a.f=a.f&&(m==b||m instanceof Error),a.c=b=m);if(pa(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.i=!0}catch(p){b=p,a.f=!0,ph(a)||(c=!0)}}a.c=b;d&&(m=r(a.o,a,!0),d=r(a.o,a,!1),b instanceof hh?(oh(b,m,d),b.w=!0):b.then(m,d));c&&(b=
new rh(b),qh[b.a]=b,a.h=b.a)}function mh(){u.call(this)}t(mh,u);mh.prototype.message="Deferred has already fired";mh.prototype.name="AlreadyCalledError";function ih(){u.call(this)}t(ih,u);ih.prototype.message="Deferred was canceled";ih.prototype.name="CanceledError";function rh(a){this.a=k.setTimeout(r(this.c,this),0);this.b=a}rh.prototype.c=function(){delete qh[this.a];throw this.b;};var qh={};function sh(a){var b={},c=b.document||document,d=td(a),e=document.createElement("SCRIPT"),f={Kb:e,Ga:void 0},h=new hh(th,f),m=null,p=null!=b.timeout?b.timeout:5E3;0<p&&(m=window.setTimeout(function(){uh(e,!0);var a=new vh(wh,"Timeout reached for loading script "+d);jh(h);kh(h,!1,a)},p),f.Ga=m);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(uh(e,b.fd||!1,m),h.C())};e.onerror=function(){uh(e,!0,m);var a=new vh(xh,"Error while loading script "+
d);jh(h);kh(h,!1,a)};f=b.attributes||{};ab(f,{type:"text/javascript",charset:"UTF-8"});Jd(e,f);e.src=td(a);yh(c).appendChild(e);return h}function yh(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function th(){if(this&&this.Kb){var a=this.Kb;a&&"SCRIPT"==a.tagName&&uh(a,!0,this.Ga)}}
function uh(a,b,c){null!=c&&k.clearTimeout(c);a.onload=ca;a.onerror=ca;a.onreadystatechange=ca;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var xh=0,wh=1;function vh(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a}t(vh,u);function zh(a){this.f=a}t(zh,ug);zh.prototype.a=function(){return new this.f};zh.prototype.b=function(){return{}};
function Ah(a,b,c){this.b=a;a=b||{};this.i=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.m=a.secureTokenTimeout||Bh;this.f=Za(a.secureTokenHeaders||Ch);this.g=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.h=a.firebaseTimeout||Dh;this.a=Za(a.firebaseHeaders||Eh);c&&(this.a["X-Client-Version"]=c,this.f["X-Client-Version"]=c);c="Node"==me();c=k.XMLHttpRequest||c&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.XMLHttpRequest;if(!c&&
!le())throw new L("internal-error","The XMLHttpRequest compatibility library was not found.");this.c=void 0;le()?this.c=new Pg(self):ne()?this.c=new zh(c):this.c=new zg}var Fh,M="idToken",Bh=new Be(3E4,6E4),Ch={"Content-Type":"application/x-www-form-urlencoded"},Dh=new Be(3E4,6E4),Eh={"Content-Type":"application/json"};function Gh(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function Hh(a,b){b?(a.a["X-Client-Version"]=b,a.f["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.f["X-Client-Version"])}function Ih(a,b,c,d,e,f,h){Yd()||le()?a=r(a.o,a):(Fh||(Fh=new A(function(a,b){Jh(a,b)})),a=r(a.l,a));a(b,c,d,e,f,h)}
Ah.prototype.o=function(a,b,c,d,e,f){if(le()&&("undefined"===typeof k.fetch||"undefined"===typeof k.Headers||"undefined"===typeof k.Request))throw new L("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var h=new Tg(this.c);if(f){h.g=Math.max(0,f);var m=setTimeout(function(){h.dispatchEvent("timeout")},f)}tc(h,"complete",function(){m&&clearTimeout(m);var a=null;try{a=
JSON.parse(gh(this))||null}catch(z){a=null}b&&b(a)});zc(h,"ready",function(){m&&clearTimeout(m);Ib(this)});zc(h,"timeout",function(){m&&clearTimeout(m);Ib(this);b&&b(null)});Xg(h,a,c,d,e)};var Kh=qd("https://apis.google.com/js/client.js?onload=%{onload}"),Lh="__fcb"+Math.floor(1E6*Math.random()).toString();
function Jh(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[Lh]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=ud(Kh,{onload:Lh});nh(sh(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
Ah.prototype.l=function(a,b,c,d,e){var f=this;Fh.then(function(){window.gapi.client.setApiKey(f.b);var h=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(h);b&&b(a)}})}).s(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
function Mh(a,b){return new A(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Ih(a,a.i+"?key="+encodeURIComponent(a.b),function(a){a?a.error?d(Nh(a)):a.access_token&&a.refresh_token?c(a):d(new L("internal-error")):d(new L("network-request-failed"))},"POST",hd(b).toString(),a.f,a.m.get()):d(new L("internal-error"))})}
function Oh(a,b,c,d,e,f){var h=dd(a.g+b);G(h,"key",a.b);f&&G(h,"cb",na().toString());var m="GET"==c;if(m)for(var p in d)d.hasOwnProperty(p)&&G(h,p,d[p]);return new A(function(b,f){Ih(a,h.toString(),function(a){a?a.error?f(Nh(a,e||{})):b(a):f(new L("network-request-failed"))},c,m?void 0:Od(xe(d)),a.a,a.h.get())})}function Ph(a){if(!tg.test(a.email))throw new L("invalid-email");}function Qh(a){"email"in a&&Ph(a)}
function Rh(a,b){return P(a,Sh,{identifier:b,continueUri:ue()?Vd():"http://localhost"}).then(function(a){return a.allProviders||[]})}function Th(a,b){return P(a,Sh,{identifier:b,continueUri:ue()?Vd():"http://localhost"}).then(function(a){return a.signinMethods||[]})}function Uh(a){return P(a,Vh,{}).then(function(a){return a.authorizedDomains||[]})}function Wh(a){if(!a[M])throw new L("internal-error");}
function Xh(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new L("internal-error");}else{if(!a.sessionInfo)throw new L("missing-verification-id");if(!a.code)throw new L("missing-verification-code");}}Ah.prototype.Pa=function(){return P(this,Yh,{})};Ah.prototype.ob=function(a,b){return P(this,Zh,{idToken:a,email:b})};Ah.prototype.pb=function(a,b){return P(this,ag,{idToken:a,password:b})};var $h={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};g=Ah.prototype;
g.qb=function(a,b){var c={idToken:a},d=[];Xa($h,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return P(this,Zh,c)};g.jb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};ab(a,b);return P(this,ai,a)};g.kb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};ab(a,b);return P(this,bi,a)};g.ib=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};ab(a,b);return P(this,ci,a)};function ig(a,b){return P(a,di,b)}g.Ta=function(a){return P(this,ei,a)};
function fi(a,b,c){return P(a,gi,{idToken:b,deleteProvider:c})}function hi(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new L("internal-error");}
function ii(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=sg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=sg(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=sg(a)):a.errorMessage&&(b=ji(a.errorMessage));if(b)throw b;if(!a[M])throw new L("internal-error");}function Kf(a,b){b.returnIdpCredential=!0;return P(a,ki,b)}function Mf(a,b){b.returnIdpCredential=!0;return P(a,li,b)}
function Nf(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return P(a,mi,b)}function ni(a){if(!a.oobCode)throw new L("invalid-action-code");}g.Ya=function(a,b){return P(this,oi,{oobCode:a,newPassword:b})};g.Ja=function(a){return P(this,pi,{oobCode:a})};g.Va=function(a){return P(this,qi,{oobCode:a})};
var qi={endpoint:"setAccountInfo",B:ni,da:"email"},pi={endpoint:"resetPassword",B:ni,J:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b)throw new L("internal-error");}},ri={endpoint:"signupNewUser",B:function(a){Ph(a);if(!a.password)throw new L("weak-password");},J:Wh,R:!0},Sh={endpoint:"createAuthUri"},si={endpoint:"deleteAccount",T:["idToken"]},gi={endpoint:"setAccountInfo",T:["idToken","deleteProvider"],B:function(a){if(!fa(a.deleteProvider))throw new L("internal-error");}},Yf=
{endpoint:"emailLinkSignin",T:["email","oobCode"],B:Ph,J:Wh,R:!0},$f={endpoint:"emailLinkSignin",T:["idToken","email","oobCode"],B:Ph,J:Wh,R:!0},ti={endpoint:"getAccountInfo"},bi={endpoint:"getOobConfirmationCode",T:["requestType"],B:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new L("internal-error");Ph(a)},da:"email"},ci={endpoint:"getOobConfirmationCode",T:["idToken","requestType"],B:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new L("internal-error");},da:"email"},ai={endpoint:"getOobConfirmationCode",
T:["requestType"],B:function(a){if("PASSWORD_RESET"!=a.requestType)throw new L("internal-error");Ph(a)},da:"email"},Vh={tb:!0,endpoint:"getProjectConfig",Hb:"GET"},ui={tb:!0,endpoint:"getRecaptchaParam",Hb:"GET",J:function(a){if(!a.recaptchaSiteKey)throw new L("internal-error");}},oi={endpoint:"resetPassword",B:ni,da:"email"},di={endpoint:"sendVerificationCode",T:["phoneNumber","recaptchaToken"],da:"sessionInfo"},Zh={endpoint:"setAccountInfo",T:["idToken"],B:Qh,R:!0},ag={endpoint:"setAccountInfo",
T:["idToken"],B:function(a){Qh(a);if(!a.password)throw new L("weak-password");},J:Wh,R:!0},Yh={endpoint:"signupNewUser",J:Wh,R:!0},ki={endpoint:"verifyAssertion",B:hi,J:ii,R:!0},mi={endpoint:"verifyAssertion",B:hi,J:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new L("user-not-found");if(a.errorMessage)throw ji(a.errorMessage);if(!a[M])throw new L("internal-error");},R:!0},li={endpoint:"verifyAssertion",B:function(a){hi(a);if(!a.idToken)throw new L("internal-error");},J:ii,
R:!0},vi={endpoint:"verifyCustomToken",B:function(a){if(!a.token)throw new L("invalid-custom-token");},J:Wh,R:!0},Zf={endpoint:"verifyPassword",B:function(a){Ph(a);if(!a.password)throw new L("wrong-password");},J:Wh,R:!0},ei={endpoint:"verifyPhoneNumber",B:Xh,J:Wh},fg={endpoint:"verifyPhoneNumber",B:function(a){if(!a.idToken)throw new L("internal-error");Xh(a)},J:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",sg(a);Wh(a)}},gg={Xb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",
B:Xh,J:Wh};function P(a,b,c){if(!Me(c,b.T))return C(new L("internal-error"));var d=b.Hb||"POST",e;return B(c).then(b.B).then(function(){b.R&&(c.returnSecureToken=!0);return Oh(a,b.endpoint,d,c,b.Xb,b.tb||!1)}).then(function(a){return e=a}).then(b.J).then(function(){if(!b.da)return e;if(!(b.da in e))throw new L("internal-error");return e[b.da]})}function ji(a){return Nh({error:{errors:[{message:a}],code:400,message:a}})}
function Nh(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new L(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",
MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",
CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",
INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash"};ab(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new L(d[e],b);!b&&a&&(b=we(a));return new L("internal-error",b)};var wi={$c:{$a:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",hb:"https://securetoken.googleapis.com/v1/token",id:"p"},bd:{$a:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",hb:"https://staging-securetoken.sandbox.googleapis.com/v1/token",id:"s"},cd:{$a:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",hb:"https://test-securetoken.sandbox.googleapis.com/v1/token",id:"t"}};
function xi(a){for(var b in wi)if(wi[b].id===a)return a=wi[b],{firebaseEndpoint:a.$a,secureTokenEndpoint:a.hb};return null}var yi;yi=xi("__EID__")?"__EID__":void 0;function zi(a){this.b=a;this.a=null;this.eb=Ai(this)}
function Ai(a){return Bi().then(function(){return new A(function(b,c){I("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},Ci.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function Di(a,b){return a.eb.then(function(){return new A(function(c){a.a.send(b.type,b,c,I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Ei(a,b){a.eb.then(function(){a.a.register("authEvent",b,I("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Fi=qd("https://apis.google.com/js/api.js?onload=%{onload}"),Gi=new Be(3E4,6E4),Ci=new Be(5E3,15E3),Hi=null;
function Bi(){return Hi?Hi:Hi=(new A(function(a,b){function c(){Ae();I("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Ae();b(Error("Network Error"))},timeout:Gi.get()})}if(I("gapi.iframes.Iframe"))a();else if(I("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();k[d]=function(){I("gapi.load")?c():b(Error("Network Error"))};d=ud(Fi,{onload:d});B(sh(d)).s(function(){b(Error("Network Error"))})}})).s(function(a){Hi=null;throw a;})};function Ii(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=ed(this.i,"/__/auth/iframe");G(this.a,"apiKey",this.g);G(this.a,"appName",this.h);this.b=null;this.c=[]}Ii.prototype.toString=function(){this.f?G(this.a,"v",this.f):kd(this.a.a,"v");this.b?G(this.a,"eid",this.b):kd(this.a.a,"eid");this.c.length?G(this.a,"fw",this.c.join(",")):kd(this.a.a,"fw");return this.a.toString()};function Ji(a,b,c,d,e){this.o=a;this.l=b;this.c=c;this.m=d;this.h=this.g=this.i=null;this.a=e;this.f=null}
Ji.prototype.toString=function(){var a=ed(this.o,"/__/auth/handler");G(a,"apiKey",this.l);G(a,"appName",this.c);G(a,"authType",this.m);if(this.a.isOAuthProvider){var b=this.a;try{var c=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(this.c).auth().ea()}catch(m){c=null}b.Za=c;G(a,"providerId",this.a.providerId);b=this.a;c=xe(b.xb);for(var d in c)c[d]=c[d].toString();d=b.Dc;c=Za(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.bb&&b.Za&&!c[b.bb]&&(c[b.bb]=b.Za);Ya(c)||G(a,"customParameters",we(c))}"function"===typeof this.a.Db&&
(b=this.a.Db(),b.length&&G(a,"scopes",b.join(",")));this.i?G(a,"redirectUrl",this.i):kd(a.a,"redirectUrl");this.g?G(a,"eventId",this.g):kd(a.a,"eventId");this.h?G(a,"v",this.h):kd(a.a,"v");if(this.b)for(var h in this.b)this.b.hasOwnProperty(h)&&!cd(a,h)&&G(a,h,this.b[h]);this.f?G(a,"eid",this.f):kd(a.a,"eid");h=Ki(this.c);h.length&&G(a,"fw",h.join(","));return a.toString()};function Ki(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a).auth().xa()}catch(b){return[]}}
function Li(a,b,c,d,e){this.l=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.o=this.u=this.v=null;this.g=[];this.m=this.a=null}
function Mi(a){var b=Vd();return Uh(a).then(function(a){a:{var c=dd(b),e=c.c;c=c.b;for(var f=0;f<a.length;f++){var h=a[f];var m=c;var p=e;0==h.indexOf("chrome-extension://")?m=dd(h).b==m&&"chrome-extension"==p:"http"!=p&&"https"!=p?m=!1:fe.test(h)?m=m==h:(h=h.split(".").join("\\."),m=(new RegExp("^(.+\\."+h+"|"+h+")$","i")).test(m));if(m){a=!0;break a}}a=!1}if(!a)throw new qg(Vd());})}
function Ni(a){if(a.m)return a.m;a.m=ge().then(function(){if(!a.u){var b=a.c,c=a.h,d=Ki(a.b),e=new Ii(a.l,a.f,a.b);e.f=b;e.b=c;e.c=Ia(d||[]);a.u=e.toString()}a.i=new zi(a.u);Oi(a)});return a.m}g=Li.prototype;g.Ea=function(a,b,c){var d=new L("popup-closed-by-user"),e=new L("web-storage-unsupported"),f=this,h=!1;return this.ga().then(function(){Pi(f).then(function(c){c||(a&&be(a),b(e),h=!0)})}).s(function(){}).then(function(){if(!h)return ee(a)}).then(function(){if(!h)return Gc(c).then(function(){b(d)})})};
g.Lb=function(){var a=H();return!ve(a)&&!ze(a)};g.Gb=function(){return!1};
g.Bb=function(a,b,c,d,e,f,h){if(!a)return C(new L("popup-blocked"));if(h&&!ve())return this.ga().s(function(b){be(a);e(b)}),d(),B();this.a||(this.a=Mi(Qi(this)));var m=this;return this.a.then(function(){var b=m.ga().s(function(b){be(a);e(b);throw b;});d();return b}).then(function(){lg(c);if(!h){var d=Ri(m.l,m.f,m.b,b,c,null,f,m.c,void 0,m.h);Wd(d,a)}}).s(function(a){"auth/network-request-failed"==a.code&&(m.a=null);throw a;})};
function Qi(a){a.o||(a.v=a.c?qe(a.c,Ki(a.b)):null,a.o=new Ah(a.f,xi(a.h),a.v));return a.o}g.Ca=function(a,b,c){this.a||(this.a=Mi(Qi(this)));var d=this;return this.a.then(function(){lg(b);var e=Ri(d.l,d.f,d.b,a,b,Vd(),c,d.c,void 0,d.h);Wd(e)}).s(function(a){"auth/network-request-failed"==a.code&&(d.a=null);throw a;})};g.ga=function(){var a=this;return Ni(this).then(function(){return a.i.eb}).s(function(){a.a=null;throw new L("network-request-failed");})};g.Qb=function(){return!0};
function Ri(a,b,c,d,e,f,h,m,p,z){a=new Ji(a,b,c,d,e);a.i=f;a.g=h;a.h=m;a.b=Za(p||null);a.f=z;return a.toString()}function Oi(a){if(!a.i)throw Error("IfcHandler must be initialized!");Ei(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=ng(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return B(c)}c.status="ERROR";return B(c)})}
function Pi(a){var b={type:"webStorageSupport"};return Ni(a).then(function(){return Di(a.i,b)}).then(function(a){if(a&&a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})}g.va=function(a){this.g.push(a)};g.Ka=function(a){w(this.g,function(b){return b==a})};function Si(a){this.a=a||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new L("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}g=Si.prototype;g.get=function(a){return B(this.a.getItem(a)).then(function(a){return a&&ye(a)})};g.set=function(a,b){return B(this.a.setItem(a,we(b)))};g.P=function(a){return B(this.a.removeItem(a))};g.Y=function(){};g.ca=function(){};function Ti(a){this.b=a;this.a={};this.c=r(this.f,this)}var Ui=[];function Vi(){var a=le()?self:null;v(Ui,function(c){c.b==a&&(b=c)});if(!b){var b=new Ti(a);Ui.push(b)}return b}
Ti.prototype.f=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];v(d,function(b){e.push(B().then(function(){return b(a.origin,a.data.data)}))});ub(e).then(function(d){var e=[];v(d,function(a){e.push({fulfilled:a.Cb,value:a.value,reason:a.reason?a.reason.message:void 0})});v(e,function(a){for(var b in a)"undefined"===typeof a[b]&&delete a[b]});a.ports[0].postMessage({status:"done",eventId:c,
eventType:b,response:e})})}};Ti.prototype.subscribe=function(a,b){Ya(this.a)&&this.b.addEventListener("message",this.c);"undefined"===typeof this.a[a]&&(this.a[a]=[]);this.a[a].push(b)};Ti.prototype.unsubscribe=function(a,b){"undefined"!==typeof this.a[a]&&b?(w(this.a[a],function(a){return a==b}),0==this.a[a].length&&delete this.a[a]):b||delete this.a[a];Ya(this.a)&&this.b.removeEventListener("message",this.c)};function Wi(){this.a=navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller||null}Wi.prototype.postMessage=function(a,b){this.a.postMessage(a,b)};function Xi(){this.f=new Wi;this.a="undefined"!==typeof MessageChannel?new MessageChannel:null;this.c=!1;this.b=[]}
function Yi(a,b){var c,d=b||{},e,f,h;return(new A(function(b,p){a.a?(c=Math.floor(Math.random()*Math.pow(10,20)).toString(),a.start(),f=setTimeout(function(){p(Error("unsupported_event"))},20),e=function(a){a.data.eventId===c&&("ack"===a.data.status?(clearTimeout(f),h=setTimeout(function(){p(Error("timeout"))},500)):"done"===a.data.status?(clearTimeout(h),"undefined"!==typeof a.data.response?b(a.data.response):p(Error("unknown_error"))):(clearTimeout(f),clearTimeout(h),p(Error("invalid_response"))))},
a.b.push(e),a.a.port1.addEventListener("message",e),a.f.postMessage({eventType:"keyChanged",eventId:c,data:d},[a.a.port2])):p(Error("connection_unavailable"))})).then(function(b){Zi(a,e);return b}).s(function(b){Zi(a,e);throw b;})}function Zi(a,b){a.a&&(w(a.b,function(a){return a==b}),a.a.port1.removeEventListener("message",b))}Xi.prototype.close=function(){if(this.a){for(;0<this.b.length;){var a=this.b.pop();this.a.port1.removeEventListener("message",a)}this.a.port1.close();this.a=null;this.c=!1}};
Xi.prototype.start=function(){this.a&&!this.c&&(this.a.port1.start(),this.c=!0)};function $i(){if(!aj())throw new L("web-storage-unsupported");this.f={};this.a=[];this.b=0;this.g=k.indexedDB;this.type="indexedDB";this.i=null;var a=this;le()&&self&&(this.i=Vi(),this.i.subscribe("keyChanged",function(b,c){return a.Pb().then(function(b){0<b.length&&v(a.a,function(a){a(b)});return{keyProcessed:Fa(b,c.key)}})}))}var bj;
function cj(a){return new A(function(b,c){var d=a.g.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(a){c(Error(a.target.error))}})}
function dj(a){return new A(function(b,c){var d=a.g.open("firebaseLocalStorageDb",1);d.onerror=function(a){try{a.preventDefault()}catch(f){}c(Error(a.target.error))};d.onupgradeneeded=function(a){a=a.target.result;try{a.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(d){d=d.target.result;d.objectStoreNames.contains("firebaseLocalStorage")?b(d):cj(a).then(function(){return dj(a)}).then(function(a){b(a)}).s(function(a){c(a)})}})}
function ej(a){a.h||(a.h=dj(a));return a.h}function aj(){try{return!!k.indexedDB}catch(a){return!1}}function fj(a){return a.objectStore("firebaseLocalStorage")}function gj(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}function hj(a){return new A(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})}g=$i.prototype;
g.set=function(a,b){var c=!1,d,e=this;return ej(this).then(function(b){d=b;b=fj(gj(d,!0));return hj(b.get(a))}).then(function(f){var h=fj(gj(d,!0));if(f)return f.value=b,hj(h.put(f));e.b++;c=!0;f={};f.fbase_key=a;f.value=b;return hj(h.add(f))}).then(function(){e.f[a]=b;return ij(a)}).ia(function(){c&&e.b--})};function ij(a){return navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller?Yi(new Xi,{key:a}).then(function(){}).s(function(){}):B()}
g.get=function(a){return ej(this).then(function(b){return hj(fj(gj(b,!1)).get(a))}).then(function(a){return a&&a.value})};g.P=function(a){var b=!1,c=this;return ej(this).then(function(d){b=!0;c.b++;return hj(fj(gj(d,!0))["delete"](a))}).then(function(){delete c.f[a];return ij(a)}).ia(function(){b&&c.b--})};
g.Pb=function(){var a=this;return ej(this).then(function(a){var b=fj(gj(a,!1));return b.getAll?hj(b.getAll()):new A(function(a,c){var d=[],e=b.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){c(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=Xd(a.f,c);a.f=c}return d})};g.Y=function(a){0==this.a.length&&jj(this);this.a.push(a)};
g.ca=function(a){w(this.a,function(b){return b==a});0==this.a.length&&this.c&&this.c.cancel("STOP_EVENT")};function jj(a){function b(){a.c=Gc(800).then(r(a.Pb,a)).then(function(b){0<b.length&&v(a.a,function(a){a(b)})}).then(b).s(function(a){"STOP_EVENT"!=a.message&&b()});return a.c}a.c&&a.c.cancel("STOP_EVENT");b()};function kj(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=B().then(function(){if(aj()){var a=se(),e="__sak"+a;bj||(bj=new $i);c=bj;return c.set(e,a).then(function(){return c.get(e)}).then(function(b){if(b!==a)throw Error("indexedDB not supported!");return c.P(e)}).then(function(){return c}).s(function(){return b.c})}return b.c}).then(function(a){b.type=a.type;a.Y(function(a){v(b.a,function(b){b(a)})});return a})}g=kj.prototype;g.get=function(a){return this.b.then(function(b){return b.get(a)})};
g.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};g.P=function(a){return this.b.then(function(b){return b.P(a)})};g.Y=function(a){this.a.push(a)};g.ca=function(a){w(this.a,function(b){return b==a})};function lj(){this.a={};this.type="inMemory"}g=lj.prototype;g.get=function(a){return B(this.a[a])};g.set=function(a,b){this.a[a]=b;return B()};g.P=function(a){delete this.a[a];return B()};g.Y=function(){};g.ca=function(){};function mj(){if(!nj()){if("Node"==me())throw new L("internal-error","The LocalStorage compatibility library was not found.");throw new L("web-storage-unsupported");}this.a=oj()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;this.type="localStorage"}function oj(){try{var a=k.localStorage,b=se();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function nj(){var a="Node"==me();a=oj()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=mj.prototype;g.get=function(a){var b=this;return B().then(function(){var c=b.a.getItem(a);return ye(c)})};g.set=function(a,b){var c=this;return B().then(function(){var d=we(b);null===d?c.P(a):c.a.setItem(a,d)})};g.P=function(a){var b=this;return B().then(function(){b.a.removeItem(a)})};
g.Y=function(a){k.window&&pc(k.window,"storage",a)};g.ca=function(a){k.window&&E(k.window,"storage",a)};function pj(){this.type="nullStorage"}g=pj.prototype;g.get=function(){return B(null)};g.set=function(){return B()};g.P=function(){return B()};g.Y=function(){};g.ca=function(){};function qj(){if(!rj()){if("Node"==me())throw new L("internal-error","The SessionStorage compatibility library was not found.");throw new L("web-storage-unsupported");}this.a=sj()||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function sj(){try{var a=k.sessionStorage,b=se();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function rj(){var a="Node"==me();a=sj()||a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}g=qj.prototype;g.get=function(a){var b=this;return B().then(function(){var c=b.a.getItem(a);return ye(c)})};g.set=function(a,b){var c=this;return B().then(function(){var d=we(b);null===d?c.P(a):c.a.setItem(a,d)})};g.P=function(a){var b=this;return B().then(function(){b.a.removeItem(a)})};g.Y=function(){};
g.ca=function(){};function tj(){var a={};a.Browser=uj;a.Node=vj;a.ReactNative=wj;a.Worker=xj;this.a=a[me()]}var yj,uj={A:mj,Qa:qj},vj={A:mj,Qa:qj},wj={A:Si,Qa:pj},xj={A:mj,Qa:pj};var zj={Zc:"local",NONE:"none",ad:"session"};function Aj(a){var b=new L("invalid-persistence-type"),c=new L("unsupported-persistence-type");a:{for(d in zj)if(zj[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(me()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;default:if(!re()&&"none"!==a)throw c;}}
function Bj(){var a=!ze(H())&&ke()?!0:!1,b=ve(),c=re();this.o=a;this.h=b;this.m=c;this.a={};yj||(yj=new tj);a=yj;try{this.g=!Ud()&&Fe()||!k.indexedDB?new a.a.A:new kj(le()?new lj:new a.a.A)}catch(d){this.g=new lj,this.h=!0}try{this.i=new a.a.Qa}catch(d){this.i=new lj}this.l=new lj;this.f=r(this.Ob,this);this.b={}}var Cj;function Dj(){Cj||(Cj=new Bj);return Cj}function Ej(a,b){switch(b){case "session":return a.i;case "none":return a.l;default:return a.g}}
function Fj(a,b){return"firebase:"+a.name+(b?":"+b:"")}function Gj(a,b,c){var d=Fj(b,c),e=Ej(a,b.A);return a.get(b,c).then(function(f){var h=null;try{h=ye(k.localStorage.getItem(d))}catch(m){}if(h&&!f)return k.localStorage.removeItem(d),a.set(b,h,c);h&&f&&"localStorage"!=e.type&&k.localStorage.removeItem(d)})}g=Bj.prototype;g.get=function(a,b){return Ej(this,a.A).get(Fj(a,b))};function Hj(a,b,c){c=Fj(b,c);"local"==b.A&&(a.b[c]=null);return Ej(a,b.A).P(c)}
g.set=function(a,b,c){var d=Fj(a,c),e=this,f=Ej(this,a.A);return f.set(d,b).then(function(){return f.get(d)}).then(function(b){"local"==a.A&&(e.b[d]=b)})};g.addListener=function(a,b,c){a=Fj(a,b);this.m&&(this.b[a]=k.localStorage.getItem(a));Ya(this.a)&&(Ej(this,"local").Y(this.f),this.h||(Ud()||!Fe())&&k.indexedDB||!this.m||Ij(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
g.removeListener=function(a,b,c){a=Fj(a,b);this.a[a]&&(w(this.a[a],function(a){return a==c}),0==this.a[a].length&&delete this.a[a]);Ya(this.a)&&(Ej(this,"local").ca(this.f),Jj(this))};function Ij(a){Jj(a);a.c=setInterval(function(){for(var b in a.a){var c=k.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new dc({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Ob(c))}},1E3)}function Jj(a){a.c&&(clearInterval(a.c),a.c=null)}
g.Ob=function(a){if(a&&a.f){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=k.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.Wa(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?Ej(this,"local").ca(this.f):Jj(this);if(this.o)if(c=k.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==k.localStorage.getItem(b))f.b[b]=k.localStorage.getItem(b),f.Wa(b)};Nb&&Yb&&10==Yb&&k.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else v(a,r(this.Wa,this))};g.Wa=function(a){this.a[a]&&v(this.a[a],function(a){a()})};function Kj(a){this.a=a;this.b=Dj()}var Lj={name:"authEvent",A:"local"};function Mj(a){return a.b.get(Lj,a.a).then(function(a){return ng(a)})};function Nj(){this.a=Dj()};function Oj(){this.b=-1};function Pj(a,b){this.b=-1;this.b=Qj;this.f=k.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.m=k.Int32Array?new Int32Array(64):Array(64);void 0!==Rj||(k.Int32Array?Rj=new Int32Array(Sj):Rj=Sj);this.reset()}var Rj;t(Pj,Oj);for(var Qj=64,Tj=Qj-1,Uj=[],Vj=0;Vj<Tj;Vj++)Uj[Vj]=0;var Wj=Ha(128,Uj);Pj.prototype.reset=function(){this.g=this.c=0;this.a=k.Int32Array?new Int32Array(this.h):Ia(this.h)};
function Xj(a){for(var b=a.f,c=a.m,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,h=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+h|0}d=a.a[0]|0;e=a.a[1]|0;var m=a.a[2]|0,p=a.a[3]|0,z=a.a[4]|0,qc=a.a[5]|0,Qc=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var Zl=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&m^e&m)|0;h=z&qc^~z&Qc;f=f+((z>>>6|z<<26)^(z>>>11|z<<21)^(z>>>
25|z<<7))|0;h=h+(Rj[b]|0)|0;h=f+(h+(c[b]|0)|0)|0;f=Qc;Qc=qc;qc=z;z=p+h|0;p=m;m=e;e=d;d=h+Zl|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+m|0;a.a[3]=a.a[3]+p|0;a.a[4]=a.a[4]+z|0;a.a[5]=a.a[5]+qc|0;a.a[6]=a.a[6]+Qc|0;a.a[7]=a.a[7]+f|0}
function Yj(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if(l(b))for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(Xj(a),e=0);else if(ha(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(Xj(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var Sj=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Zj(){Pj.call(this,8,ak)}t(Zj,Pj);var ak=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function bk(a,b,c,d,e){this.l=a;this.i=b;this.m=c;this.o=d||null;this.u=e||null;this.h=b+":"+c;this.v=new Nj;this.g=new Kj(this.h);this.f=null;this.b=[];this.a=this.c=null}function ck(a){return new L("invalid-cordova-configuration",a)}g=bk.prototype;
g.ga=function(){return this.za?this.za:this.za=he().then(function(){if("function"!==typeof I("universalLinks.subscribe",k))throw ck("cordova-universal-links-plugin is not installed");if("undefined"===typeof I("BuildInfo.packageName",k))throw ck("cordova-plugin-buildinfo is not installed");if("function"!==typeof I("cordova.plugins.browsertab.openUrl",k))throw ck("cordova-plugin-browsertab is not installed");if("function"!==typeof I("cordova.InAppBrowser.open",k))throw ck("cordova-plugin-inappbrowser is not installed");
},function(){throw new L("cordova-not-ready");})};function dk(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function ek(a){var b=new Zj;Yj(b,a);a=[];var c=8*b.g;56>b.c?Yj(b,Wj,56-b.c):Yj(b,Wj,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;Xj(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return kf(a)}
g.Ea=function(a,b){b(new L("operation-not-supported-in-this-environment"));return B()};g.Bb=function(){return C(new L("operation-not-supported-in-this-environment"))};g.Qb=function(){return!1};g.Lb=function(){return!0};g.Gb=function(){return!0};
g.Ca=function(a,b,c){if(this.c)return C(new L("redirect-operation-pending"));var d=this,e=k.document,f=null,h=null,m=null,p=null;return this.c=B().then(function(){lg(b);return fk(d)}).then(function(){return gk(d,a,b,c)}).then(function(){return(new A(function(a,b){h=function(){var b=I("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.a&&"function"===typeof d.a.close&&(d.a.close(),d.a=null);return!1};d.va(h);m=function(){f||(f=Gc(2E3).then(function(){b(new L("redirect-cancelled-by-user"))}))};
p=function(){Ce()&&m()};e.addEventListener("resume",m,!1);H().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",p,!1)})).s(function(a){return hk(d).then(function(){throw a;})})}).ia(function(){m&&e.removeEventListener("resume",m,!1);p&&e.removeEventListener("visibilitychange",p,!1);f&&f.cancel();h&&d.Ka(h);d.c=null})};
function gk(a,b,c,d){var e=dk(),f=new mg(b,d,null,e,new L("no-auth-event")),h=I("BuildInfo.packageName",k);if("string"!==typeof h)throw new L("invalid-cordova-configuration");var m=I("BuildInfo.displayName",k),p={};if(H().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(H().toLowerCase().match(/android/))p.apn=h;else return C(new L("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);e=ek(e);p.sessionId=e;var z=Ri(a.l,a.i,a.m,b,c,null,d,a.o,p,a.u);return a.ga().then(function(){var b=
a.h;return a.v.a.set(Lj,f.D(),b)}).then(function(){var b=I("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new L("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=I("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new L("invalid-cordova-configuration");c(z)}else{c=I("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new L("invalid-cordova-configuration");b=H();b=!(!b.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!b.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.a=c(z,b?"_blank":"_system","location=yes")}})})}function ik(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function fk(a){a.f||(a.f=a.ga().then(function(){return new A(function(b){function c(d){b(d);a.Ka(c);return!1}a.va(c);jk(a)})}));return a.f}function hk(a){var b=null;return Mj(a.g).then(function(c){b=c;c=a.g;return Hj(c.b,Lj,c.a)}).then(function(){return b})}
function jk(a){function b(b){d=!0;e&&e.cancel();hk(a).then(function(d){var e=c;if(d&&b&&b.url){var f=null;e=Hf(b.url);-1!=e.indexOf("/__/auth/callback")&&(f=dd(e),f=ye(cd(f,"firebaseError")||null),f=(f="object"===typeof f?Ze(f):null)?new mg(d.b,d.c,null,null,f):new mg(d.b,d.c,e,d.g));e=f||c}ik(a,e)})}var c=new mg("unknown",null,null,null,new L("no-auth-event")),d=!1,e=Gc(500).then(function(){return hk(a).then(function(){d||ik(a,c)})}),f=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(I("BuildInfo.packageName",
k).toLowerCase()+"://")&&b({url:a});if("function"===typeof f)try{f(a)}catch(m){console.error(m)}};pg||(pg=new og);pg.subscribe(b)}g.va=function(a){this.b.push(a);fk(this).s(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new mg("unknown",null,null,null,new L("no-auth-event")),a(b))})};g.Ka=function(a){w(this.b,function(b){return b==a})};function kk(a){this.a=a;this.b=Dj()}var lk={name:"pendingRedirect",A:"session"};function mk(a){return a.b.set(lk,"pending",a.a)}function nk(a){return Hj(a.b,lk,a.a)}function ok(a){return a.b.get(lk,a.a).then(function(a){return"pending"==a})};function pk(a,b,c){this.u=a;this.m=b;this.l=c;this.h=[];this.f=!1;this.i=r(this.ab,this);this.b=new qk;this.o=new rk;this.g=new kk(this.m+":"+this.l);this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.o;this.c.linkViaPopup=this.o;this.c.reauthViaPopup=this.o;this.a=sk(this.u,this.m,this.l,yi)}function sk(a,b,c,d){var e=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null;return ie()?new bk(a,b,c,e,d):new Li(a,b,c,e,d)}g=pk.prototype;
g.reset=function(){this.f=!1;this.a.Ka(this.i);this.a=sk(this.u,this.m,this.l)};g.Xa=function(){this.b.Xa()};function tk(a){a.f||(a.f=!0,a.a.va(a.i));var b=a.a;return a.a.ga().s(function(c){a.a==b&&a.reset();throw c;})}function uk(a){a.a.Lb()&&tk(a).s(function(b){var c=new mg("unknown",null,null,null,new L("operation-not-supported-in-this-environment"));vk(b)&&a.ab(c)});a.a.Gb()||wk(a.b)}
g.subscribe=function(a){Fa(this.h,a)||this.h.push(a);if(!this.f){var b=this;ok(this.g).then(function(a){a?nk(b.g).then(function(){tk(b).s(function(a){var c=new mg("unknown",null,null,null,new L("operation-not-supported-in-this-environment"));vk(a)&&b.ab(c)})}):uk(b)}).s(function(){uk(b)})}};g.unsubscribe=function(a){w(this.h,function(b){return b==a})};
g.ab=function(a){if(!a)throw new L("invalid-auth-event");for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.ub(a.b,a.c)){(b=this.c[a.b])&&b.h(a,d);b=!0;break}}wk(this.b);return b};var xk=new Be(2E3,1E4),yk=new Be(3E4,6E4);pk.prototype.fa=function(){return this.b.fa()};function zk(a,b,c,d,e,f){return a.a.Bb(b,c,d,function(){a.f||(a.f=!0,a.a.va(a.i))},function(){a.reset()},e,f)}function vk(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
pk.prototype.Ca=function(a,b,c){var d=this,e;return mk(this.g).then(function(){return d.a.Ca(a,b,c).s(function(a){if(vk(a))throw new L("operation-not-supported-in-this-environment");e=a;return nk(d.g).then(function(){throw e;})}).then(function(){return d.a.Qb()?new A(function(){}):nk(d.g).then(function(){return d.fa()}).then(function(){}).s(function(){})})})};pk.prototype.Ea=function(a,b,c,d){return this.a.Ea(c,function(c){a.ha(b,null,c,d)},xk.get())};var Ak={};
function Bk(a,b,c){var d=b+":"+c;Ak[d]||(Ak[d]=new pk(a,b,c));return Ak[d]}function qk(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1}qk.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
qk.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.b,d=a.c,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(Ck(this,!0,null,a.a),B()):b.wa(c,d)?Dk(this,a,b):C(new L("invalid-auth-event")):(Ck(this,!1,null,null),B())}else C(new L("invalid-auth-event"))};function wk(a){a.g||(a.g=!0,Ck(a,!1,null,null))}qk.prototype.Xa=function(){this.g&&!this.i&&Ck(this,!1,null,null)};
function Dk(a,b,c){c=c.wa(b.b,b.c);var d=b.f,e=b.g,f=!!b.b.match(/Redirect$/);c(d,e).then(function(b){Ck(a,f,b,null)}).s(function(b){Ck(a,f,null,b)})}function Ek(a,b){a.b=function(){return C(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function Fk(a,b){a.b=function(){return B(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function Ck(a,b,c,d){b?d?Ek(a,d):Fk(a,c):Fk(a,{user:null});a.f=[];a.c=[]}
qk.prototype.fa=function(){var a=this;return new A(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),Gk(a))})};function Gk(a){var b=new L("timeout");a.a&&a.a.cancel();a.a=Gc(yk.get()).then(function(){a.b||(a.g=!0,Ck(a,!0,null,b))})}function rk(){}rk.prototype.h=function(a,b){if(a){var c=a.b,d=a.c;a.a?(b.ha(a.b,null,a.a,a.c),B()):b.wa(c,d)?Hk(a,b):C(new L("invalid-auth-event"))}else C(new L("invalid-auth-event"))};
function Hk(a,b){var c=a.c,d=a.b;b.wa(d,c)(a.f,a.g).then(function(a){b.ha(d,a,null,c)}).s(function(a){b.ha(d,null,a,c)})};function Ik(){this.rb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.rb},set:function(a){this.rb=a},enumerable:!1})};function Jk(a,b){this.a=b;J(this,"verificationId",a)}Jk.prototype.confirm=function(a){a=jg(this.verificationId,a);return this.a(a)};function Kk(a,b,c,d){return(new hg(a)).Ta(b,c).then(function(a){return new Jk(a,d)})};function Lk(a){var b=sf(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new L("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");K(this,{token:a,expirationTime:Ee(1E3*b.exp),authTime:Ee(1E3*b.auth_time),issuedAtTime:Ee(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,claims:b})};function Mk(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}Mk.prototype.start=function(){this.a=this.c;Nk(this,!0)};function Ok(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function Nk(a,b){a.stop();a.b=Gc(Ok(a,b)).then(function(){return De()}).then(function(){return a.h()}).then(function(){Nk(a,!0)}).s(function(b){a.i(b)&&Nk(a,!1)})}
Mk.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function Pk(a){this.f=a;this.b=this.a=null;this.c=0}Pk.prototype.D=function(){return{apiKey:this.f.b,refreshToken:this.a,accessToken:this.b,expirationTime:this.c}};function Qk(a,b){var c=b[M],d=b.refreshToken;b=Rk(b.expiresIn);a.b=c;a.c=b;a.a=d}function Sk(a,b){a.b=b.b;a.a=b.a;a.c=b.c}function Rk(a){return na()+1E3*parseInt(a,10)}
function Tk(a,b){return Mh(a.f,b).then(function(b){a.b=b.access_token;a.c=Rk(b.expires_in);a.a=b.refresh_token;return{accessToken:a.b,expirationTime:a.c,refreshToken:a.a}}).s(function(b){"auth/user-token-expired"==b.code&&(a.a=null);throw b;})}Pk.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?C(new L("user-token-expired")):a||!this.b||na()>this.c-3E4?this.a?Tk(this,{grant_type:"refresh_token",refresh_token:this.a}):B(null):B({accessToken:this.b,expirationTime:this.c,refreshToken:this.a})};function Uk(a,b){this.a=a||null;this.b=b||null;K(this,{lastSignInTime:Ee(b||null),creationTime:Ee(a||null)})}function Vk(a){return new Uk(a.a,a.b)}Uk.prototype.D=function(){return{lastLoginAt:this.b,createdAt:this.a}};function Wk(a,b,c,d,e,f){K(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}function Xk(a,b){D.call(this,a);for(var c in b)this[c]=b[c]}t(Xk,D);
function Q(a,b,c){this.G=[];this.l=a.apiKey;this.o=a.appName;this.u=a.authDomain||null;a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?qe(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null;this.b=new Ah(this.l,xi(yi),a);this.h=new Pk(this.b);Yk(this,b[M]);Qk(this.h,b);J(this,"refreshToken",this.h.a);Zk(this,c||{});F.call(this);this.I=!1;this.u&&te()&&(this.a=Bk(this.u,this.l,this.o));this.N=[];this.i=null;this.w=$k(this);this.V=r(this.Ha,this);var d=this;this.ka=null;this.sa=function(a){d.oa(a.g)};this.X=null;this.O=[];this.ra=function(a){al(d,
a.c)};this.W=null}t(Q,F);Q.prototype.oa=function(a){this.ka=a;Gh(this.b,a)};Q.prototype.ea=function(){return this.ka};function bl(a,b){a.X&&E(a.X,"languageCodeChanged",a.sa);(a.X=b)&&pc(b,"languageCodeChanged",a.sa)}function al(a,b){a.O=b;Hh(a.b,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?qe(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,a.O):null)}Q.prototype.xa=function(){return Ia(this.O)};function cl(a,b){a.W&&E(a.W,"frameworkChanged",a.ra);(a.W=b)&&pc(b,"frameworkChanged",a.ra)}Q.prototype.Ha=function(){this.w.b&&(this.w.stop(),this.w.start())};
function dl(a){try{return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app(a.o).auth()}catch(b){throw new L("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.o+"'!");}}function $k(a){return new Mk(function(){return a.F(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.h.c-na()-3E5;return 0<b?b:0})}function el(a){a.C||a.w.b||(a.w.start(),E(a,"tokenChanged",a.V),pc(a,"tokenChanged",a.V))}function fl(a){E(a,"tokenChanged",a.V);a.w.stop()}
function Yk(a,b){a.qa=b;J(a,"_lat",b)}function gl(a,b){w(a.N,function(a){return a==b})}function hl(a){for(var b=[],c=0;c<a.N.length;c++)b.push(a.N[c](a));return ub(b).then(function(){return a})}function il(a){a.a&&!a.I&&(a.I=!0,a.a.subscribe(a))}
function Zk(a,b){K(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,metadata:new Uk(b.createdAt,b.lastLoginAt),providerData:[]})}J(Q.prototype,"providerId","firebase");function jl(){}function kl(a){return B().then(function(){if(a.C)throw new L("app-deleted");})}function ll(a){return Ba(a.providerData,function(a){return a.providerId})}
function ml(a,b){b&&(nl(a,b.providerId),a.providerData.push(b))}function nl(a,b){w(a.providerData,function(a){return a.providerId==b})}function ol(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&J(a,b,c)}
function pl(a,b){a!=b&&(K(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,providerData:[]}),b.metadata?J(a,"metadata",Vk(b.metadata)):J(a,"metadata",new Uk),v(b.providerData,function(b){ml(a,b)}),Sk(a.h,b.h),J(a,"refreshToken",a.h.a))}g=Q.prototype;g.reload=function(){var a=this;return R(this,kl(this).then(function(){return ql(a).then(function(){return hl(a)}).then(jl)}))};
function ql(a){return a.F().then(function(b){var c=a.isAnonymous;return rl(a,b).then(function(){c||ol(a,"isAnonymous",!1);return b})})}g.dc=function(a){return this.F(a).then(function(a){return new Lk(a)})};g.F=function(a){var b=this;return R(this,kl(this).then(function(){return b.h.getToken(a)}).then(function(a){if(!a)throw new L("internal-error");a.accessToken!=b.qa&&(Yk(b,a.accessToken),b.dispatchEvent(new Xk("tokenChanged")));ol(b,"refreshToken",a.refreshToken);return a.accessToken}))};
function sl(a,b){b[M]&&a.qa!=b[M]&&(Qk(a.h,b),a.dispatchEvent(new Xk("tokenChanged")),Yk(a,b[M]),ol(a,"refreshToken",a.h.a))}function rl(a,b){return P(a.b,ti,{idToken:b}).then(r(a.xc,a))}
g.xc=function(a){a=a.users;if(!a||!a.length)throw new L("internal-error");a=a[0];Zk(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt});for(var b=tl(a),c=0;c<b.length;c++)ml(this,b[c]);ol(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
function tl(a){return(a=a.providerUserInfo)&&a.length?Ba(a,function(a){return new Wk(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl,a.phoneNumber)}):[]}g.fb=function(a){var b=this,c=null;return R(this,a.f(this.b,this.uid).then(function(a){sl(b,a);c=ul(b,a,"reauthenticate");b.i=null;return b.reload()}).then(function(){return c}),!0)};
g.yc=function(a){He("firebase.User.prototype.reauthenticateWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential instead.");return this.fb(a).then(function(){})};function vl(a,b){return ql(a).then(function(){if(Fa(ll(a),b))return hl(a).then(function(){throw new L("provider-already-linked");})})}
g.cb=function(a){var b=this,c=null;return R(this,vl(this,a.providerId).then(function(){return b.F()}).then(function(c){return a.c(b.b,c)}).then(function(a){c=ul(b,a,"link");return wl(b,a)}).then(function(){return c}))};g.pc=function(a){He("firebase.User.prototype.linkWithCredential is deprecated. Please use firebase.User.prototype.linkAndRetrieveDataWithCredential instead.");return this.cb(a).then(function(a){return a.user})};
g.qc=function(a,b){var c=this;return R(this,vl(this,"phone").then(function(){return Kk(dl(c),a,b,r(c.cb,c))}))};g.zc=function(a,b){var c=this;return R(this,B().then(function(){return Kk(dl(c),a,b,r(c.fb,c))}),!0)};function ul(a,b,c){var d=kg(b);b=xf(b);return Ke({user:a,credential:d,additionalUserInfo:b,operationType:c})}function wl(a,b){sl(a,b);return a.reload().then(function(){return a})}
g.ob=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.ob(c,a)}).then(function(a){sl(b,a);return b.reload()}))};g.Rc=function(a){var b=this;return R(this,this.F().then(function(c){return a.c(b.b,c)}).then(function(a){sl(b,a);return b.reload()}))};g.pb=function(a){var b=this;return R(this,this.F().then(function(c){return b.b.pb(c,a)}).then(function(a){sl(b,a);return b.reload()}))};
g.qb=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return kl(this);var b=this;return R(this,this.F().then(function(c){return b.b.qb(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){sl(b,a);ol(b,"displayName",a.displayName||null);ol(b,"photoURL",a.photoUrl||null);v(b.providerData,function(a){"password"===a.providerId&&(J(a,"displayName",b.displayName),J(a,"photoURL",b.photoURL))});return hl(b)}).then(jl))};
g.Pc=function(a){var b=this;return R(this,ql(this).then(function(c){return Fa(ll(b),a)?fi(b.b,c,[a]).then(function(a){var c={};v(a.providerUserInfo||[],function(a){c[a.providerId]=!0});v(ll(b),function(a){c[a]||nl(b,a)});c[hg.PROVIDER_ID]||J(b,"phoneNumber",null);return hl(b)}):hl(b).then(function(){throw new L("no-such-provider");})}))};
g.delete=function(){var a=this;return R(this,this.F().then(function(b){return P(a.b,si,{idToken:b})}).then(function(){a.dispatchEvent(new Xk("userDeleted"))})).then(function(){for(var b=0;b<a.G.length;b++)a.G[b].cancel("app-deleted");bl(a,null);cl(a,null);a.G=[];a.C=!0;fl(a);J(a,"refreshToken",null);a.a&&a.a.unsubscribe(a)})};
g.ub=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.aa||null)==b||"reauthViaRedirect"==a&&(this.aa||null)==b?!0:!1};g.ha=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};
g.wa=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?r(this.zb,this):"reauthViaPopup"==a&&b==(this.g||null)?r(this.Ab,this):"linkViaRedirect"==a&&(this.aa||null)==b?r(this.zb,this):"reauthViaRedirect"==a&&(this.aa||null)==b?r(this.Ab,this):null};g.rc=function(a){var b=this;return xl(this,"linkViaPopup",a,function(){return vl(b,a.providerId).then(function(){return hl(b)})},!1)};g.Ac=function(a){return xl(this,"reauthViaPopup",a,function(){return B()},!0)};
function xl(a,b,c,d,e){if(!te())return C(new L("operation-not-supported-in-this-environment"));if(a.i&&!e)return C(a.i);var f=wf(c.providerId),h=se(a.uid+":::"),m=null;(!ve()||ke())&&a.u&&c.isOAuthProvider&&(m=Ri(a.u,a.l,a.o,b,c,null,h,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null));var p=ce(m,f&&f.Ba,f&&f.Aa);d=d().then(function(){yl(a);if(!e)return a.F().then(function(){})}).then(function(){return zk(a.a,p,b,c,h,!!m)}).then(function(){return new A(function(c,d){a.ha(b,null,new L("cancelled-popup-request"),a.g||null);
a.f=c;a.v=d;a.g=h;a.c=a.a.Ea(a,b,p,h)})}).then(function(a){p&&be(p);return a?Ke(a):null}).s(function(a){p&&be(p);throw a;});return R(a,d,e)}g.sc=function(a){var b=this;return zl(this,"linkViaRedirect",a,function(){return vl(b,a.providerId)},!1)};g.Bc=function(a){return zl(this,"reauthViaRedirect",a,function(){return B()},!0)};
function zl(a,b,c,d,e){if(!te())return C(new L("operation-not-supported-in-this-environment"));if(a.i&&!e)return C(a.i);var f=null,h=se(a.uid+":::");d=d().then(function(){yl(a);if(!e)return a.F().then(function(){})}).then(function(){a.aa=h;return hl(a)}).then(function(b){a.ba&&(b=a.ba,b=b.b.set(Al,a.D(),b.a));return b}).then(function(){return a.a.Ca(b,c,h)}).s(function(b){f=b;if(a.ba)return Bl(a.ba);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function yl(a){if(!a.a||!a.I){if(a.a&&!a.I)throw new L("internal-error");throw new L("auth-domain-config-required");}}g.zb=function(a,b){var c=this;this.c&&(this.c.cancel(),this.c=null);var d=null,e=this.F().then(function(d){return Mf(c.b,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=ul(c,a,"link");return wl(c,a)}).then(function(){return d});return R(this,e)};
g.Ab=function(a,b){var c=this;this.c&&(this.c.cancel(),this.c=null);var d=null,e=B().then(function(){return If(Nf(c.b,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=ul(c,a,"reauthenticate");sl(c,a);c.i=null;return c.reload()}).then(function(){return d});return R(this,e,!0)};g.ib=function(a){var b=this,c=null;return R(this,this.F().then(function(b){c=b;return"undefined"===typeof a||Ya(a)?{}:jf(new $e(a))}).then(function(a){return b.b.ib(c,a)}).then(function(a){if(b.email!=a)return b.reload()}).then(function(){}))};
function R(a,b,c){var d=Cl(a,b,c);a.G.push(d);d.ia(function(){Ga(a.G,d)});return d}function Cl(a,b,c){return a.i&&!c?(b.cancel(),C(a.i)):b.s(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.i||a.dispatchEvent(new Xk("userInvalidated")),a.i=b);throw b;})}g.toJSON=function(){return this.D()};
g.D=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.l,appName:this.o,authDomain:this.u,stsTokenManager:this.h.D(),redirectEventId:this.aa||null};this.metadata&&ab(a,this.metadata.D());v(this.providerData,function(b){a.providerData.push(Le(b))});return a};
function Dl(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c[M]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-na())/1E3;else return null;var d=new Q(b,c,a);a.providerData&&v(a.providerData,function(a){a&&ml(d,Ke(a))});a.redirectEventId&&(d.aa=a.redirectEventId);return d}
function El(a,b,c,d){var e=new Q(a,b);c&&(e.ba=c);d&&al(e,d);return e.reload().then(function(){return e})}function Fl(a,b,c,d){b=b||{apiKey:a.l,authDomain:a.u,appName:a.o};var e=a.h,f={};f[M]=e.b;f.refreshToken=e.a;f.expiresIn=(e.c-na())/1E3;b=new Q(b,f);c&&(b.ba=c);d&&al(b,d);pl(b,a);return b};function Gl(a){this.a=a;this.b=Dj()}var Al={name:"redirectUser",A:"session"};function Bl(a){return Hj(a.b,Al,a.a)}function Hl(a,b){return a.b.get(Al,a.a).then(function(a){a&&b&&(a.authDomain=b);return Dl(a||{})})};function Il(a){this.a=a;this.b=Dj();this.c=null;this.f=Jl(this);this.b.addListener(Kl("local"),this.a,r(this.g,this))}Il.prototype.g=function(){var a=this,b=Kl("local");Ll(this,function(){return B().then(function(){return a.c&&"local"!=a.c.A?a.b.get(b,a.a):null}).then(function(c){if(c)return Ml(a,"local").then(function(){a.c=b})})})};function Ml(a,b){var c=[],d;for(d in zj)zj[d]!==b&&c.push(Hj(a.b,Kl(zj[d]),a.a));c.push(Hj(a.b,Nl,a.a));return tb(c)}
function Jl(a){var b=Kl("local"),c=Kl("session"),d=Kl("none");return Gj(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(c){return c?d:a.b.get(b,a.a).then(function(c){return c?b:a.b.get(Nl,a.a).then(function(a){return a?Kl(a):b})})})}).then(function(b){a.c=b;return Ml(a,b.A)}).s(function(){a.c||(a.c=b)})}var Nl={name:"persistence",A:"session"};function Kl(a){return{name:"authUser",A:a}}
Il.prototype.lb=function(a){var b=null,c=this;Aj(a);return Ll(this,function(){return a!=c.c.A?c.b.get(c.c,c.a).then(function(d){b=d;return Ml(c,a)}).then(function(){c.c=Kl(a);if(b)return c.b.set(c.c,b,c.a)}):B()})};function Ol(a){return Ll(a,function(){return a.b.set(Nl,a.c.A,a.a)})}function Pl(a,b){return Ll(a,function(){return a.b.set(a.c,b.D(),a.a)})}function Ql(a){return Ll(a,function(){return Hj(a.b,a.c,a.a)})}
function Rl(a,b){return Ll(a,function(){return a.b.get(a.c,a.a).then(function(a){a&&b&&(a.authDomain=b);return Dl(a||{})})})}function Ll(a,b){a.f=a.f.then(b,b);return a.f};function Sl(a){this.l=!1;J(this,"settings",new Ik);J(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?qe(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION):null,this.b=new Ah(S(this).options&&S(this).options.apiKey,xi(yi),a);else throw new L("invalid-api-key");this.N=[];this.o=[];this.I=[];this.Tb=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(r(this.mc,this));this.O=void 0;this.Ub=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.createSubscribe(r(this.nc,this));Tl(this,null);this.h=new Il(S(this).options.apiKey+":"+S(this).name);this.w=
new Gl(S(this).options.apiKey+":"+S(this).name);this.V=T(this,Ul(this));this.i=T(this,Vl(this));this.X=!1;this.ka=r(this.Mc,this);this.Ha=r(this.Z,this);this.qa=r(this.bc,this);this.ra=r(this.jc,this);this.sa=r(this.kc,this);Wl(this);this.INTERNAL={};this.INTERNAL["delete"]=r(this.delete,this);this.INTERNAL.logFramework=r(this.tc,this);this.u=0;F.call(this);Xl(this);this.G=[]}t(Sl,F);function Yl(a){D.call(this,"languageCodeChanged");this.g=a}t(Yl,D);
function $l(a){D.call(this,"frameworkChanged");this.c=a}t($l,D);g=Sl.prototype;g.lb=function(a){a=this.h.lb(a);return T(this,a)};g.oa=function(a){this.W===a||this.l||(this.W=a,Gh(this.b,this.W),this.dispatchEvent(new Yl(this.ea())))};g.ea=function(){return this.W};g.Sc=function(){var a=k.navigator;this.oa(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};g.tc=function(a){this.G.push(a);Hh(this.b,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?qe(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,this.G):null);this.dispatchEvent(new $l(this.G))};
g.xa=function(){return Ia(this.G)};function Xl(a){Object.defineProperty(a,"lc",{get:function(){return this.ea()},set:function(a){this.oa(a)},enumerable:!1});a.W=null}g.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).D()}};function am(a){return a.Sb||C(new L("auth-domain-config-required"))}
function Wl(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&te()&&(a.Sb=a.V.then(function(){if(!a.l){a.a=Bk(b,c,S(a).name);a.a.subscribe(a);U(a)&&il(U(a));if(a.C){il(a.C);var d=a.C;d.oa(a.ea());bl(d,a);d=a.C;al(d,a.G);cl(d,a);a.C=null}return a.a}}))}g.ub=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};
g.ha=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.v?this.v(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.v)};g.wa=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?r(this.ac,this):null};
g.ac=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.c&&(this.c.cancel(),this.c=null);var d=null,e=null,f=Kf(c.b,a).then(function(a){d=kg(a);e=xf(a);return a});a=c.V.then(function(){return f}).then(function(a){return bm(c,a)}).then(function(){return Ke({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return T(this,a)};
g.Kc=function(a){if(!te())return C(new L("operation-not-supported-in-this-environment"));var b=this,c=wf(a.providerId),d=se(),e=null;(!ve()||ke())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=Ri(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION||null));var f=ce(e,c&&c.Ba,c&&c.Aa);c=am(this).then(function(b){return zk(b,f,"signInViaPopup",a,d,!!e)}).then(function(){return new A(function(a,c){b.ha("signInViaPopup",null,new L("cancelled-popup-request"),
b.g);b.f=a;b.v=c;b.g=d;b.c=b.a.Ea(b,"signInViaPopup",f,d)})}).then(function(a){f&&be(f);return a?Ke(a):null}).s(function(a){f&&be(f);throw a;});return T(this,c)};g.Lc=function(a){if(!te())return C(new L("operation-not-supported-in-this-environment"));var b=this,c=am(this).then(function(){return Ol(b.h)}).then(function(){return b.a.Ca("signInViaRedirect",a)});return T(this,c)};
g.fa=function(){if(!te())return C(new L("operation-not-supported-in-this-environment"));var a=this,b=am(this).then(function(){return a.a.fa()}).then(function(a){return a?Ke(a):null});return T(this,b)};
g.Qc=function(a){if(!a)return C(new L("null-user"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=Fl(a,c,b.w,b.xa());return T(this,this.i.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return pl(U(b),a),b.Z(a);Tl(b,d);il(d);return b.Z(d)}).then(function(){cm(b)}))};
function bm(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.V.then(function(){return El(c,b,a.w,a.xa())}).then(function(b){if(U(a)&&b.uid==U(a).uid)return pl(U(a),b),a.Z(b);Tl(a,b);il(b);return a.Z(b)}).then(function(){cm(a)})}
function Tl(a,b){U(a)&&(gl(U(a),a.Ha),E(U(a),"tokenChanged",a.qa),E(U(a),"userDeleted",a.ra),E(U(a),"userInvalidated",a.sa),fl(U(a)));b&&(b.N.push(a.Ha),pc(b,"tokenChanged",a.qa),pc(b,"userDeleted",a.ra),pc(b,"userInvalidated",a.sa),0<a.u&&el(b));J(a,"currentUser",b);b&&(b.oa(a.ea()),bl(b,a),al(b,a.G),cl(b,a))}g.mb=function(){var a=this,b=this.i.then(function(){if(!U(a))return B();Tl(a,null);return Ql(a.h).then(function(){cm(a)})});return T(this,b)};
function dm(a){var b=Hl(a.w,S(a).options.authDomain).then(function(b){if(a.C=b)b.ba=a.w;return Bl(a.w)});return T(a,b)}function Ul(a){var b=S(a).options.authDomain,c=dm(a).then(function(){return Rl(a.h,b)}).then(function(b){return b?(b.ba=a.w,a.C&&(a.C.aa||null)==(b.aa||null)?b:b.reload().then(function(){return Pl(a.h,b).then(function(){return b})}).s(function(c){return"auth/network-request-failed"==c.code?b:Ql(a.h)})):null}).then(function(b){Tl(a,b||null)});return T(a,c)}
function Vl(a){return a.V.then(function(){return a.fa()}).s(function(){}).then(function(){if(!a.l)return a.ka()}).s(function(){}).then(function(){if(!a.l){a.X=!0;var b=a.h;b.b.addListener(Kl("local"),b.a,a.ka)}})}
g.Mc=function(){var a=this;return Rl(this.h,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return pl(U(a),b),U(a).F();if(U(a)||b)Tl(a,b),b&&(il(b),b.ba=a.w),a.a&&a.a.subscribe(a),cm(a)}})};g.Z=function(a){return Pl(this.h,a)};g.bc=function(){cm(this);this.Z(U(this))};g.jc=function(){this.mb()};g.kc=function(){this.mb()};
function em(a,b){var c=null,d=null;return T(a,b.then(function(b){c=kg(b);d=xf(b);return bm(a,b)}).then(function(){return Ke({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}g.mc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};g.nc=function(a){var b=this;fm(this,function(){a.next(U(b))})};g.vc=function(a,b,c){var d=this;this.X&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.Promise.resolve().then(function(){n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Tb(a,b,c)};
g.uc=function(a,b,c){var d=this;this.X&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.Promise.resolve().then(function(){d.O=d.getUid();n(a)?a(U(d)):n(a.next)&&a.next(U(d))});return this.Ub(a,b,c)};g.cc=function(a){var b=this,c=this.i.then(function(){return U(b)?U(b).F(a).then(function(a){return{accessToken:a}}):null});return T(this,c)};g.Mb=function(a){var b=this;return this.i.then(function(){return em(b,P(b.b,vi,{token:a}))}).then(function(a){var c=a.user;ol(c,"isAnonymous",!1);b.Z(c);return a})};
g.Ec=function(a){He("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCustomToken is deprecated. Please use firebase.auth.Auth.prototype.signInWithCustomToken instead.");return this.Mb(a)};g.Fc=function(a,b){He("firebase.auth.Auth.prototype.signInAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.signInWithEmailAndPassword instead.");return this.Nb(a,b)};g.Nb=function(a,b){var c=this;return this.i.then(function(){return em(c,P(c.b,Zf,{email:a,password:b}))})};
g.wb=function(a,b){var c=this;return this.i.then(function(){return em(c,P(c.b,ri,{email:a,password:b}))})};g.Wb=function(a,b){He("firebase.auth.Auth.prototype.createUserAndRetrieveDataWithEmailAndPassword is deprecated. Please use firebase.auth.Auth.prototype.createUserWithEmailAndPassword instead.");return this.wb(a,b)};g.Hc=function(a){He("firebase.auth.Auth.prototype.signInWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential instead.");return this.Oa(a).then(function(a){return a.user})};
g.Oa=function(a){var b=this;return this.i.then(function(){return em(b,a.ya(b.b))})};g.Pa=function(){var a=this;return this.i.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=Ke({providerId:null,isNewUser:!1});return Ke({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return em(a,a.b.Pa()).then(function(b){var c=b.user;ol(c,"isAnonymous",!0);a.Z(c);return b})})};
g.Gc=function(){He("firebase.auth.Auth.prototype.signInAnonymouslyAndRetrieveData is deprecated. Please use firebase.auth.Auth.prototype.signInAnonymously instead.");return this.Pa()};function S(a){return a.app}function U(a){return a.currentUser}g.getUid=function(){return U(this)&&U(this).uid||null};function gm(a){return U(a)&&U(a)._lat||null}
function cm(a){if(a.X){for(var b=0;b<a.o.length;b++)if(a.o[b])a.o[b](gm(a));if(a.O!==a.getUid()&&a.I.length)for(a.O=a.getUid(),b=0;b<a.I.length;b++)if(a.I[b])a.I[b](gm(a))}}g.Vb=function(a){this.addAuthTokenListener(a);this.u++;0<this.u&&U(this)&&el(U(this))};g.Cc=function(a){var b=this;v(this.o,function(c){c==a&&b.u--});0>this.u&&(this.u=0);0==this.u&&U(this)&&fl(U(this));this.removeAuthTokenListener(a)};
g.addAuthTokenListener=function(a){var b=this;this.o.push(a);T(this,this.i.then(function(){b.l||Fa(b.o,a)&&a(gm(b))}))};g.removeAuthTokenListener=function(a){w(this.o,function(b){return b==a})};function fm(a,b){a.I.push(b);T(a,a.i.then(function(){!a.l&&Fa(a.I,b)&&a.O!==a.getUid()&&(a.O=a.getUid(),b(gm(a)))}))}
g.delete=function(){this.l=!0;for(var a=0;a<this.N.length;a++)this.N[a].cancel("app-deleted");this.N=[];this.h&&(a=this.h,a.b.removeListener(Kl("local"),a.a,this.ka));this.a&&(this.a.unsubscribe(this),this.a.Xa());return _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.Promise.resolve()};function T(a,b){a.N.push(b);b.ia(function(){Ga(a.N,b)});return b}
g.Zb=function(a){He("firebase.auth.Auth.prototype.fetchProvidersForEmail is deprecated. Please use firebase.auth.Auth.prototype.fetchSignInMethodsForEmail instead.");return T(this,Rh(this.b,a))};g.$b=function(a){return T(this,Th(this.b,a))};g.oc=function(a){return!!cg(a)};g.kb=function(a,b){var c=this;return T(this,B().then(function(){var a=new $e(b);if(!a.c)throw new L("argument-error",hf+" must be true when sending sign in link to email");return jf(a)}).then(function(b){return c.b.kb(a,b)}).then(function(){}))};
g.Tc=function(a){return this.Ja(a).then(function(a){return a.data.email})};g.Ya=function(a,b){return T(this,this.b.Ya(a,b).then(function(){}))};g.Ja=function(a){return T(this,this.b.Ja(a).then(function(a){return new Oe(a)}))};g.Va=function(a){return T(this,this.b.Va(a).then(function(){}))};g.jb=function(a,b){var c=this;return T(this,B().then(function(){return"undefined"===typeof b||Ya(b)?{}:jf(new $e(b))}).then(function(b){return c.b.jb(a,b)}).then(function(){}))};
g.Jc=function(a,b){return T(this,Kk(this,a,b,r(this.Oa,this)))};g.Ic=function(a,b){var c=this;return T(this,B().then(function(){var d=bg(a,b||Vd());return c.Oa(d)}))};function hm(){}hm.prototype.render=function(){};hm.prototype.reset=function(){};hm.prototype.getResponse=function(){};hm.prototype.execute=function(){};function im(){this.a={};this.b=1E12}var jm=null;im.prototype.render=function(a,b){this.a[this.b.toString()]=new km(a,b);return this.b++};im.prototype.reset=function(a){var b=lm(this,a);a=mm(a);b&&a&&(b.delete(),delete this.a[a])};im.prototype.getResponse=function(a){return(a=lm(this,a))?a.getResponse():null};im.prototype.execute=function(a){(a=lm(this,a))&&a.execute()};function lm(a,b){return(b=mm(b))?a.a[b]||null:null}function mm(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
function km(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=Id(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():pc(this.f,"click",this.i)}km.prototype.getResponse=function(){nm(this);return this.b};
km.prototype.execute=function(){nm(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=oe();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};km.prototype.delete=function(){nm(this);this.g=!0;clearTimeout(this.a);this.a=null;E(this.f,"click",this.i)};function nm(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function om(){}om.prototype.g=function(){jm||(jm=new im);return B(jm)};om.prototype.c=function(){};var pm=null;function qm(){this.b=k.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var rm=qd("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),sm=new Be(3E4,6E4);
qm.prototype.g=function(a){var b=this;return new A(function(c,d){var e=setTimeout(function(){d(new L("network-request-failed"))},sm.get());if(!k.grecaptcha||a!==b.f&&!b.b){k[b.a]=function(){if(k.grecaptcha){b.f=a;var f=k.grecaptcha.render;k.grecaptcha.render=function(a,c){a=f(a,c);b.b++;return a};clearTimeout(e);c(k.grecaptcha)}else clearTimeout(e),d(new L("internal-error"));delete k[b.a]};var f=ud(rm,{onload:b.a,hl:a||""});B(sh(f)).s(function(){clearTimeout(e);d(new L("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
c(k.grecaptcha)})};qm.prototype.c=function(){this.b--};var tm=null;function um(a,b,c,d,e,f,h){J(this,"type","recaptcha");this.c=this.f=null;this.C=!1;this.l=b;this.g=null;h?(pm||(pm=new om),h=pm):(tm||(tm=new qm),h=tm);this.o=h;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[vm])throw new L("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[wm];if(!k.document)throw new L("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!Id(b)||!this.i&&Id(b).hasChildNodes())throw new L("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.u=new Ah(a,f||null,e||null);this.v=d||function(){return null};var m=this;this.m=[];var p=this.a[xm];this.a[xm]=function(a){ym(m,a);if("function"===typeof p)p(a);else if("string"===typeof p){var b=I(p,k);"function"===typeof b&&b(a)}};var z=this.a[zm];this.a[zm]=function(){ym(m,null);if("function"===typeof z)z();else if("string"===typeof z){var a=
I(z,k);"function"===typeof a&&a()}}}var xm="callback",zm="expired-callback",vm="sitekey",wm="size";function ym(a,b){for(var c=0;c<a.m.length;c++)try{a.m[c](b)}catch(d){}}function Am(a,b){w(a.m,function(a){return a==b})}function Bm(a,b){a.h.push(b);b.ia(function(){Ga(a.h,b)});return b}g=um.prototype;
g.za=function(){var a=this;return this.f?this.f:this.f=Bm(this,B().then(function(){if(ue()&&!le())return ge();throw new L("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.o.g(a.v())}).then(function(b){a.g=b;return P(a.u,ui,{})}).then(function(b){a.a[vm]=b.recaptchaSiteKey}).s(function(b){a.f=null;throw b;}))};
g.render=function(){Cm(this);var a=this;return Bm(this,this.za().then(function(){if(null===a.c){var b=a.l;if(!a.i){var c=Id(b);b=Ld("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};g.verify=function(){Cm(this);var a=this;return Bm(this,this.render().then(function(b){return new A(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(b){b&&(Am(a,e),c(b))};a.m.push(e);a.i&&a.g.execute(a.c)}})}))};g.reset=function(){Cm(this);null!==this.c&&this.g.reset(this.c)};
function Cm(a){if(a.C)throw new L("internal-error","RecaptchaVerifier instance has been destroyed.");}g.clear=function(){Cm(this);this.C=!0;this.o.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=Id(this.l);for(var b;b=a.firstChild;)a.removeChild(b)}};
function Dm(a,b,c){var d=!1;try{this.b=c||_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app()}catch(h){throw new L("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new L("invalid-api-key");var e=this,f=null;try{f=this.b.auth().xa()}catch(h){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(h){}f=_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION?qe(_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.SDK_VERSION,f):null;um.call(this,c,a,b,function(){try{var a=e.b.auth().ea()}catch(m){a=
null}return a},f,xi(yi),d)}t(Dm,um);function Em(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,h=0;h<b.length;h++)if(b[h].optional)f=!0;else{if(f)throw new L("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].M(c[e])&&!f){b=b[e];if(0>e||e>=Fm.length)throw new L("internal-error",
"Argument validator received an unsupported number of arguments.");c=Fm[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.K+".";break a}d=null}}if(d)throw new L("argument-error",a+" failed: "+d);}var Fm="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",K:"a valid string",optional:!!b,M:l}}function Gm(a,b){return{name:a||"",K:"a boolean",optional:!!b,M:ba}}
function W(a,b){return{name:a||"",K:"a valid object",optional:!!b,M:q}}function Hm(a,b){return{name:a||"",K:"a function",optional:!!b,M:n}}function Im(a,b){return{name:a||"",K:"null",optional:!!b,M:ea}}function Jm(){return{name:"",K:"an HTML element",optional:!1,M:function(a){return!!(a&&a instanceof Element)}}}function Km(){return{name:"auth",K:"an instance of Firebase Auth",optional:!0,M:function(a){return!!(a&&a instanceof Sl)}}}
function Lm(){return{name:"app",K:"an instance of Firebase App",optional:!0,M:function(a){return!!(a&&a instanceof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.app.App)}}}function Mm(a){return{name:a?a+"Credential":"credential",K:a?"a valid "+a+" credential":"a valid credential",optional:!1,M:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.ya||!c)}}}
function Nm(){return{name:"authProvider",K:"a valid Auth provider",optional:!1,M:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function Om(){return{name:"applicationVerifier",K:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,M:function(a){return!!(a&&l(a.type)&&n(a.verify))}}}function X(a,b,c,d){return{name:c||"",K:a.K+" or "+b.K,optional:!!d,M:function(c){return a.M(c)||b.M(c)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=Pm(d,a[c],b[c].j)}}function Qm(a,b){for(var c in b){var d=b[c].name;if(d!==c){var e=b[c].sb;Object.defineProperty(a,d,{get:function(){return this[c]},set:function(a){Em(d,[e],[a],!0);this[c]=a},enumerable:!0})}}}function Z(a,b,c,d){a[b]=Pm(b,c,d)}
function Pm(a,b,c){function d(){var a=Array.prototype.slice.call(arguments);Em(e,c,a);return b.apply(this,a)}if(!c)return b;var e=Rm(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function Rm(a){a=a.split(".");return a[a.length-1]};Y(Sl.prototype,{Va:{name:"applyActionCode",j:[V("code")]},Ja:{name:"checkActionCode",j:[V("code")]},Ya:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},wb:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},Wb:{name:"createUserAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Zb:{name:"fetchProvidersForEmail",j:[V("email")]},$b:{name:"fetchSignInMethodsForEmail",j:[V("email")]},fa:{name:"getRedirectResult",j:[]},oc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},
uc:{name:"onAuthStateChanged",j:[X(W(),Hm(),"nextOrObserver"),Hm("opt_error",!0),Hm("opt_completed",!0)]},vc:{name:"onIdTokenChanged",j:[X(W(),Hm(),"nextOrObserver"),Hm("opt_error",!0),Hm("opt_completed",!0)]},jb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),Im(null,!0),"opt_actionCodeSettings",!0)]},kb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},lb:{name:"setPersistence",j:[V("persistence")]},Oa:{name:"signInAndRetrieveDataWithCredential",
j:[Mm()]},Pa:{name:"signInAnonymously",j:[]},Gc:{name:"signInAnonymouslyAndRetrieveData",j:[]},Hc:{name:"signInWithCredential",j:[Mm()]},Mb:{name:"signInWithCustomToken",j:[V("token")]},Ec:{name:"signInAndRetrieveDataWithCustomToken",j:[V("token")]},Nb:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Ic:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Fc:{name:"signInAndRetrieveDataWithEmailAndPassword",j:[V("email"),V("password")]},Jc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),
Om()]},Kc:{name:"signInWithPopup",j:[Nm()]},Lc:{name:"signInWithRedirect",j:[Nm()]},Qc:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",K:"an instance of Firebase User",optional:!!a,M:function(a){return!!(a&&a instanceof Q)}}}(),Im(),"user")]},mb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},Sc:{name:"useDeviceLanguage",j:[]},Tc:{name:"verifyPasswordResetCode",j:[V("code")]}});Qm(Sl.prototype,{lc:{name:"languageCode",sb:X(V(),Im(),"languageCode")}});Sl.Persistence=zj;
Sl.Persistence.LOCAL="local";Sl.Persistence.SESSION="session";Sl.Persistence.NONE="none";
Y(Q.prototype,{"delete":{name:"delete",j:[]},dc:{name:"getIdTokenResult",j:[Gm("opt_forceRefresh",!0)]},F:{name:"getIdToken",j:[Gm("opt_forceRefresh",!0)]},cb:{name:"linkAndRetrieveDataWithCredential",j:[Mm()]},pc:{name:"linkWithCredential",j:[Mm()]},qc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),Om()]},rc:{name:"linkWithPopup",j:[Nm()]},sc:{name:"linkWithRedirect",j:[Nm()]},fb:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Mm()]},yc:{name:"reauthenticateWithCredential",j:[Mm()]},zc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),Om()]},Ac:{name:"reauthenticateWithPopup",j:[Nm()]},Bc:{name:"reauthenticateWithRedirect",j:[Nm()]},reload:{name:"reload",j:[]},ib:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),Im(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},Pc:{name:"unlink",j:[V("provider")]},ob:{name:"updateEmail",j:[V("email")]},pb:{name:"updatePassword",j:[V("password")]},Rc:{name:"updatePhoneNumber",j:[Mm("phone")]},qb:{name:"updateProfile",j:[W("profile")]}});
Y(im.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(hm.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(A.prototype,{ia:{name:"finally"},s:{name:"catch"},then:{name:"then"}});Qm(Ik.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",sb:Gm("appVerificationDisabledForTesting")}});Y(Jk.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});
Z(O,"credential",function(a,b){return new Xf(a,b)},[V("email"),V("password")]);Y(Pf.prototype,{ta:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Pf,"credential",Qf,[X(V(),W(),"token")]);Z(O,"credentialWithLink",bg,[V("email"),V("emailLink")]);Y(Rf.prototype,{ta:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Rf,"credential",Sf,[X(V(),W(),"token")]);
Y(Tf.prototype,{ta:{name:"addScope",j:[V("scope")]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Tf,"credential",Uf,[X(V(),X(W(),Im()),"idToken"),X(V(),Im(),"accessToken",!0)]);Y(Vf.prototype,{Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Vf,"credential",Wf,[X(V(),W(),"token"),V("secret",!0)]);
Y(N.prototype,{ta:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),Im(),"idToken",!0),X(V(),Im(),"accessToken",!0)]},Da:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(hg,"credential",jg,[V("verificationId"),V("verificationCode")]);Y(hg.prototype,{Ta:{name:"verifyPhoneNumber",j:[V("phoneNumber"),Om()]}});Y(L.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(rg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});
Y(qg.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(Dm.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});
(function(){if("undefined"!==typeof _firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL&&_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerService){var a={Auth:Sl,Error:L};Z(a,"EmailAuthProvider",O,[]);Z(a,"FacebookAuthProvider",Pf,[]);Z(a,"GithubAuthProvider",Rf,[]);Z(a,"GoogleAuthProvider",Tf,[]);Z(a,"TwitterAuthProvider",Vf,[]);Z(a,"OAuthProvider",N,[V("providerId")]);Z(a,"PhoneAuthProvider",hg,[Km()]);Z(a,"RecaptchaVerifier",Dm,[X(V(),Jm(),"recaptchaContainer"),W("recaptchaParameters",!0),Lm()]);_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.registerService("auth",function(a,
c){a=new Sl(a);c({INTERNAL:{getUid:r(a.getUid,a),getToken:r(a.cc,a),addAuthTokenListener:r(a.Vb,a),removeAuthTokenListener:r(a.Cc,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});_firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.INTERNAL.extendNamespace({User:Q})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();
}).call(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});

/***/ }),

/***/ "./node_modules/angularfire2/auth/auth.js":
/*!************************************************!*\
  !*** ./node_modules/angularfire2/auth/auth.js ***!
  \************************************************/
/*! exports provided: AngularFireAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function() { return AngularFireAuth; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");




var AngularFireAuth = (function () {
    function AngularFireAuth(options, nameOrConfig, platformId, zone) {
        var _this = this;
        this.zone = zone;
        var scheduler = new angularfire2__WEBPACK_IMPORTED_MODULE_3__["FirebaseZoneScheduler"](zone, platformId);
        this.auth = zone.runOutsideAngular(function () {
            var app = Object(angularfire2__WEBPACK_IMPORTED_MODULE_3__["_firebaseAppFactory"])(options, nameOrConfig);
            return app.auth();
        });
        this.authState = scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
            var unsubscribe = _this.auth.onAuthStateChanged(subscriber);
            return { unsubscribe: unsubscribe };
        })));
        this.user = scheduler.keepUnstableUntilFirst(scheduler.runOutsideAngular(new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
            var unsubscribe = _this.auth.onIdTokenChanged(subscriber);
            return { unsubscribe: unsubscribe };
        })));
        this.idToken = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (user) {
            return user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdToken()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
        this.idTokenResult = this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (user) {
            return user ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(user.getIdTokenResult()) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }));
    }
    AngularFireAuth.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    AngularFireAuth.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [angularfire2__WEBPACK_IMPORTED_MODULE_3__["FirebaseOptionsToken"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [angularfire2__WEBPACK_IMPORTED_MODULE_3__["FirebaseNameOrConfigToken"],] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    return AngularFireAuth;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ "./node_modules/angularfire2/auth/auth.module.js":
/*!*******************************************************!*\
  !*** ./node_modules/angularfire2/auth/auth.module.js ***!
  \*******************************************************/
/*! exports provided: AngularFireAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function() { return AngularFireAuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./node_modules/angularfire2/auth/auth.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



var AngularFireAuthModule = (function () {
    function AngularFireAuthModule() {
    }
    AngularFireAuthModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]]
                },] },
    ];
    return AngularFireAuthModule;
}());

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "./node_modules/angularfire2/auth/index.js":
/*!*************************************************!*\
  !*** ./node_modules/angularfire2/auth/index.js ***!
  \*************************************************/
/*! exports provided: AngularFireAuth, AngularFireAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/angularfire2/auth/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuthModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularfire2/auth/public_api.js":
/*!******************************************************!*\
  !*** ./node_modules/angularfire2/auth/public_api.js ***!
  \******************************************************/
/*! exports provided: AngularFireAuth, AngularFireAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./node_modules/angularfire2/auth/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuth", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]; });

/* harmony import */ var _auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.module */ "./node_modules/angularfire2/auth/auth.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularFireAuthModule", function() { return _auth_module__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthModule"]; });



//# sourceMappingURL=public_api.js.map

/***/ }),

/***/ "./node_modules/firebase/auth/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ "./node_modules/@firebase/auth/dist/auth.esm.js");


/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
    }
    AuthService.prototype.signin = function (email, password) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signup = function (email, password) {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signout = function () {
        this.firebaseAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ })

}]);
//# sourceMappingURL=crm-crm-module~home-home-module.js.map